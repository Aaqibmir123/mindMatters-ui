import Appointment from '../models/Appointment.js';

// Create a new appointment (public - no auth required)
export async function createAppointment(appointmentData) {
  try {
    const appointment = new Appointment(appointmentData);
    await appointment.save();
    return { success: true, appointment };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

// Get all appointments (admin only)
export async function getAllAppointments() {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    return { success: true, appointments };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

// Get appointment by ID
export async function getAppointmentById(id) {
  try {
    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return { success: false, message: 'Appointment not found' };
    }
    return { success: true, appointment };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

// Update appointment status
export async function updateAppointmentStatus(id, status) {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      id, 
      { status }, 
      { new: true }
    );
    if (!appointment) {
      return { success: false, message: 'Appointment not found' };
    }
    return { success: true, appointment };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

// Delete appointment
export async function deleteAppointment(id) {
  try {
    const appointment = await Appointment.findByIdAndDelete(id);
    if (!appointment) {
      return { success: false, message: 'Appointment not found' };
    }
    return { success: true, message: 'Appointment deleted successfully' };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

// Get appointment statistics
export async function getAppointmentStats() {
  try {
    const total = await Appointment.countDocuments();
    const pending = await Appointment.countDocuments({ status: 'pending' });
    const confirmed = await Appointment.countDocuments({ status: 'confirmed' });
    const cancelled = await Appointment.countDocuments({ status: 'cancelled' });
    
    return { 
      success: true, 
      stats: { total, pending, confirmed, cancelled } 
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}