import { Router } from 'express';
import { loginController, logoutController, meController } from '../controllers/authController.js';
import { rateLimiter } from '../middleware/authMiddleware.js';

const router = Router();

// Login route
router.post('/login', rateLimiter, loginController);

// Logout route
router.post('/logout', logoutController);

// Get current user route
router.get('/me', meController);

export default router;