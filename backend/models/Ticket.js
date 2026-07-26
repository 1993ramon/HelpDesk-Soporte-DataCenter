const mongoose = require('mongoose');

// Esquema del ticket para el Sistema de Gestión de Incidentes (Help Desk)
const TicketSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: [true, 'El título del incidente es obligatorio'],
      trim: true,
      maxlength: [100, 'El título no puede superar los 100 caracteres'],
    },
    descripcion: {
      type: String,
      required: [true, 'La descripción del incidente es obligatoria'],
      trim: true,
    },
    categoria: {
      type: String,
      required: true,
      enum: {
        values: ['Red', 'Hardware', 'Software'],
        message: 'La categoría debe ser Red, Hardware o Software',
      },
    },
    prioridad: {
      type: String,
      required: true,
      enum: {
        values: ['Alta', 'Media', 'Baja'],
        message: 'La prioridad debe ser Alta, Media o Baja',
      },
    },
    estado: {
      type: String,
      enum: {
        values: ['Abierto', 'En Progreso', 'Cerrado'],
        message: 'El estado debe ser Abierto, En Progreso o Cerrado',
      },
      default: 'Abierto',
    },
  },
  {
    timestamps: true, // Agrega automáticamente createdAt y updatedAt
  }
);

module.exports = mongoose.model('Ticket', TicketSchema);
