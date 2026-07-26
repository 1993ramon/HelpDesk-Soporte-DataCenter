const mongoose = require('mongoose');

// Función encargada de establecer la conexión con la base de datos MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB conectado correctamente: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error al conectar con MongoDB: ${error.message}`);
    process.exit(1); // Detiene la aplicación si no hay conexión a la BD
  }
};

module.exports = connectDB;
