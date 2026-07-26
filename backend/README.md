# Help Desk API — Backend (Actividad 8, Unidad 4)

API REST para el Sistema de Gestión de Incidentes (Help Desk), construida con **Node.js**, **Express** y **MongoDB (Mongoose)**.

## Tecnologías

- Node.js
- Express 5
- MongoDB Atlas (Mongoose 9)
- dotenv, cors

## Estructura

```
backend/
├── config/
│   └── db.js              # Conexión a MongoDB
├── controllers/
│   └── ticketController.js # Lógica CRUD
├── models/
│   └── Ticket.js           # Esquema Mongoose
├── routes/
│   └── ticketRoutes.js     # Endpoints REST
├── .env.example
├── .gitignore
├── package.json
└── server.js               # Punto de entrada
```

## Instalación y ejecución local

```bash
cd backend
npm install
cp .env.example .env   # completar MONGO_URI con la cadena de MongoDB Atlas
npm run dev             # o: npm start
```

El servidor arranca en `http://localhost:5000`.

## Endpoints

| Método | Endpoint       | Descripción                          |
|--------|----------------|---------------------------------------|
| GET    | /tickets       | Lista todos los incidentes            |
| GET    | /tickets/:id   | Obtiene un ticket específico          |
| POST   | /tickets       | Crea un nuevo incidente               |
| PUT    | /tickets/:id   | Actualiza estado o detalles de un ticket |
| DELETE | /tickets/:id   | Elimina un ticket                     |

## Modelo Ticket

| Campo       | Tipo   | Valores permitidos                  |
|-------------|--------|--------------------------------------|
| titulo      | String | requerido                            |
| descripcion | String | requerido                            |
| categoria   | String | Red, Hardware, Software              |
| prioridad   | String | Alta, Media, Baja                    |
| estado      | String | Abierto, En Progreso, Cerrado (default: Abierto) |

## Autor

Fabián Moncada — Desarrollo de Sistemas Informáticos, UTM Online.
