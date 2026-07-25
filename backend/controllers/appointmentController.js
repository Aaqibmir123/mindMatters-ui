import { 
  createAppointment, 
  getAllAppointments, 
  getAppointmentById, 
  updateAppointmentStatus, 
  deleteAppointment,
  getAppointmentStats 
} from '../services/appointmentService.js';

// Create appointment (public route - no auth required)
export async function createAppointmentController(req, res) {
  const { patientName, patientEmail, patientPhone, doctor, date, time, type, notes } = req.body;
  
  if (!patientName || !patientEmail || !patientPhone || !doctor || !date || !time) {
    return res.status(400).json({ 
      success: false, 
      message: 'All required fields must be provided' 
    });
  }
  
  const result = await createAppointment({
    patientName,
    patientEmail,
    patientPhone,
    doctor,
    date,
    time,
    type: type || 'Checkup',
    notes
  });
  
  if (result.success) {
    res.status(201).json({ 
      success: true, 
      message: 'Appointment booked successfully',
      appointment: result.appointment 
    });
  } else {
    res.status(400).json({ 
      success: false, 
      message: result.message 
    });
  }
}

// Get all appointments (admin only)
export async function getAppointmentsController(req, res) {
  const result = await getAllAppointments();
  
  if (result.success) {
    res.json({ 
      success: true, 
      appointments: result.appointments 
    });
  } else {
    res.status(500).json({ 
      success: false, 
      message: result.message 
    });
  }
}

// Get single appointment
export async function getSingleAppointmentController(req, res) {
  const { id } = req.params;
  const result = await getAppointmentById(id);
  
  if (result.success) {
    res.json({ 
      success: true, 
      appointment: result.appointment 
    });
  } else {
    res.status(404).json({ 
      success: false, 
      message: result.message 
    });
  }
}

// Update appointment status (admin only)
export async function updateAppointmentController(req, res) {
  const { id } = req.params;
  const { status } = req.body;
  
  if (!status) {
    return res.status(400).json({ 
      success: false, 
      message: 'Status is required' 
    });
  }
  
  const result = await updateAppointmentStatus(id, status);
  
  if (result.success) {
    res.json({ 
      success: true, 
      appointment: result.appointment 
    });
  } else {
    res.status(404).json({ 
      success: false, 
      message: result.message 
    });
  }
}

// Delete appointment (admin only)
export async function deleteAppointmentController(req, res) {
  const { id } = req.params;
  const result = await deleteAppointment(id);
  
  if (result.success) {
    res.json({ 
      success: true, 
      message: result.message 
    });
  } else {
    res.status(404).json({ 
      success: false, 
      message: result.message 
    });
  }
}

// Get appointment statistics
export async function getStatsController(req, res) {
  const result = await getAppointmentStats();
  
  if (result.success) {
    res.json({ 
      success: true, 
      stats: result.stats 
    });
  } else {
    res.status(500).json({ 
      success: false, 
      message: result.message 
    });
  }
}