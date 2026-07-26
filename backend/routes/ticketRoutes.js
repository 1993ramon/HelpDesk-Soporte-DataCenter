const express = require('express');
const router = express.Router();
const {
  getTickets,
  getTicketById,
  createTicket,
  updateTicket,
  deleteTicket,
} = require('../controllers/ticketController');

// Rutas del recurso Tickets — prefijo /tickets definido en server.js
router.route('/').get(getTickets).post(createTicket);

router.route('/:id').get(getTicketById).put(updateTicket).delete(deleteTicket);

module.exports = router;
