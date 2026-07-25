import express from 'express';
import { 
  createAppointmentController,
  getAppointmentsController,
  getSingleAppointmentController,
  updateAppointmentController,
  deleteAppointmentController,
  getStatsController
} from '../controllers/appointmentController.js';

const router = express.Router();

// Public route - create appointment (no auth required)
router.post('/', createAppointmentController);

// Admin routes
router.get('/', getAppointmentsController);
router.get('/stats', getStatsController);
router.get('/:id', getSingleAppointmentController);
router.put('/:id', updateAppointmentController);
router.delete('/:id', deleteAppointmentController);

export default router;