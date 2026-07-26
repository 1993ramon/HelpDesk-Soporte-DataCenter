const Ticket = require('../models/Ticket');

// @desc    Listar todos los incidentes
// @route   GET /tickets
const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      total: tickets.length,
      data: tickets,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error del servidor', error: error.message });
  }
};

// @desc    Buscar un ticket específico por id
// @route   GET /tickets/:id
const getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      return res.status(404).json({ success: false, message: 'Ticket no encontrado' });
    }

    res.status(200).json({ success: true, data: ticket });
  } catch (error) {
    // CastError se produce cuando el id no tiene un formato válido de ObjectId
    if (error.name === 'CastError') {
      return res.status(400).json({ success: false, message: 'ID de ticket no válido' });
    }
    res.status(500).json({ success: false, message: 'Error del servidor', error: error.message });
  }
};

// @desc    Registrar un nuevo incidente
// @route   POST /tickets
const createTicket = async (req, res) => {
  try {
    const { titulo, descripcion, categoria, prioridad, estado } = req.body;

    const nuevoTicket = await Ticket.create({
      titulo,
      descripcion,
      categoria,
      prioridad,
      estado,
    });

    res.status(201).json({ success: true, data: nuevoTicket });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const mensajes = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: mensajes.join('. ') });
    }
    res.status(500).json({ success: false, message: 'Error del servidor', error: error.message });
  }
};

// @desc    Actualizar el estado o detalles de un ticket
// @route   PUT /tickets/:id
const updateTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Devuelve el documento ya actualizado
      runValidators: true, // Vuelve a validar contra el esquema (enum, required, etc.)
    });

    if (!ticket) {
      return res.status(404).json({ success: false, message: 'Ticket no encontrado' });
    }

    res.status(200).json({ success: true, data: ticket });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({ success: false, message: 'ID de ticket no válido' });
    }
    if (error.name === 'ValidationError') {
      const mensajes = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: mensajes.join('. ') });
    }
    res.status(500).json({ success: false, message: 'Error del servidor', error: error.message });
  }
};

// @desc    Eliminar un registro
// @route   DELETE /tickets/:id
const deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);

    if (!ticket) {
      return res.status(404).json({ success: false, message: 'Ticket no encontrado' });
    }

    res.status(200).json({ success: true, message: 'Ticket eliminado correctamente', data: ticket });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({ success: false, message: 'ID de ticket no válido' });
    }
    res.status(500).json({ success: false, message: 'Error del servidor', error: error.message });
  }
};

module.exports = {
  getTickets,
  getTicketById,
  createTicket,
  updateTicket,
  deleteTicket,
};
