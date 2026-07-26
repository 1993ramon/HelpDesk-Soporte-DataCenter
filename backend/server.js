const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const ticketRoutes = require('./routes/ticketRoutes');

dotenv.config();

// Conexión a la base de datos MongoDB (Atlas o local)
connectDB();

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json()); // Permite leer JSON en el body de las peticiones

// Ruta de verificación rápida del servicio
app.get('/', (req, res) => {
  res.status(200).json({ mensaje: 'API Help Desk - Sistema de Gestión de Incidentes activa' });
});

// Rutas principales de la API
app.use('/tickets', ticketRoutes);

// Middleware para rutas no encontradas (404)
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Recurso no encontrado' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
