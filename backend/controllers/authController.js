import { loginService } from '../services/authService.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'mindmatters-jwt-secret';

export async function loginController(req, res) {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required'
      });
    }
    
    const user = await loginService(email, password);
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }
    
    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    // Set session
    req.session.user = user;
    
    return res.status(200).json({
      success: true,
      message: 'Login successful',
      user,
      token
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
}

// Logout controller
export async function logoutController(req, res) {
  try {
    // Destroy session
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: 'Logout failed'
        });
      }
      
      return res.status(200).json({
        success: true,
        message: 'Logout successful'
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
}

// Get current user controller
export async function meController(req, res) {
  try {
    if (!req.session?.user) {
      return res.status(401).json({
        success: false,
        message: 'Not authenticated'
      });
    }
    
    return res.status(200).json({
      success: true,
      user: req.session.user
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
}