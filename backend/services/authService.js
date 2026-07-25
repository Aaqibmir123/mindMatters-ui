import User from '../models/User.js';

export async function loginService(email, password) {
  const user = await User.findOne({ email: email.toLowerCase() });
  
  if (!user) {
    return null;
  }
  
  // Simple password comparison (in production, use bcrypt)
  if (user.password !== password) {
    return null;
  }
  
  return {
    id: user._id,
    email: user.email,
    role: user.role
  };
}

export async function createDefaultAdmin() {
  // Use lowercase email to match the User model's lowercase: true
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