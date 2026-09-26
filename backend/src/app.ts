import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import empleadoRoutes from './routes/empleados.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';
import { setupSwagger } from './config/swagger.js';

const app = express();

app.set('puerto', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Documentación interactiva Swagger en /api/docs
setupSwagger(app);

// Rutas de la API
app.use('/api/v1', empleadoRoutes);

// Manejo global de errores
app.use(errorHandler);

export default app;