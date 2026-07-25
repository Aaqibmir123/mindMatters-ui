import { connectDB } from '@/backend/config/db';
import User from '@/backend/models/User';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'mindmatters-jwt-secret';

// Create default admin if not exists
async function createDefaultAdmin() {
  const existingAdmin = await User.findOne({ email: 'testing@gmail.com' });
  
  if (!existingAdmin) {
    await User.create({
      email: 'testing@gmail.com',
      password: '111111',
      role: 'admin'
    });
    console.log('Default admin created');
  }
}

export async function POST(request) {
  try {
    await connectDB();
    
    // Create default admin on first request
    await createDefaultAdmin();
    
    const { email, password } = await request.json();
    
    if (!email || !password) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Email and password are required'
      }), { status: 400 });
    }
    
    // Convert email to lowercase for case-insensitive lookup
    const user = await User.findOne({ email: email.toLowerCase() });
    
    if (!user || user.password !== password) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Invalid credentials'
      }), { status: 401 });
    }
    
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    return new Response(JSON.stringify({
      success: true,
      message: 'Login successful',
      user: {
        id: user._id,
        email: user.email,
        role: user.role
      },
      token
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Set-Cookie': `token=${token}; HttpOnly; Path=/; Max-Age=86400`
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'Server error'
    }), { status: 500 });
  }
}