import type { Express } from 'express';
import swaggerUi from 'swagger-ui-express';

const swaggerSpec = {
  openapi: '3.0.0',
  info: {
    title: 'API de Gestión de Empleados',
    version: '1.0.0',
    description: 'Documentación interactiva de la API (CRUD de Empleados con validación DTO y Response Wrapper)',
  },
  servers: [
    {
      url: 'http://localhost:3000/api/v1',
      description: 'Servidor Local (v1)',
    },
  ],
  paths: {
    '/employees': {
      get: {
        summary: 'Listar todos los empleados',
        responses: {
          200: {
            description: 'Lista de empleados obtenida con éxito',
          },
        },
      },
      post: {
        summary: 'Crear un nuevo empleado',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['nombre', 'cargo', 'departamento', 'sueldo'],
                properties: {
                  nombre: { type: 'string', example: 'Andrés Mendoza' },
                  cargo: { type: 'string', example: 'Arquitecto de Software' },
                  departamento: { type: 'string', example: 'Innovación' },
                  sueldo: { type: 'number', example: 4500 },
                },
              },
            },
          },
        },
        responses: {
          201: { description: 'Empleado guardado correctamente' },
          400: { description: 'Error de validación perimetral (Zod DTO)' },
        },
      },
    },
    '/employees/{id}': {
      put: {
        summary: 'Actualizar empleado por ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'Identificador del empleado',
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  nombre: { type: 'string' },
                  cargo: { type: 'string' },
                  departamento: { type: 'string' },
                  sueldo: { type: 'number' },
                },
              },
            },
          },
        },
        responses: {
          200: { description: 'Empleado actualizado con éxito' },
          400: { description: 'Error de validación DTO' },
        },
      },
      delete: {
        summary: 'Eliminar empleado por ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'Identificador del empleado',
          },
        ],
        responses: {
          200: { description: 'Empleado eliminado con éxito' },
        },
      },
    },
  },
};

export const setupSwagger = (app: Express): void => {
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
