import type { Request, Response, NextFunction } from 'express';
import { MongoEmployeeRepository } from '../repositories/mongo-employee.repository.js';
import { apiResponse } from '../utils/response.wrapper.js';

const empleadoRepository = new MongoEmployeeRepository();

export const getEmpleado = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const data = await empleadoRepository.getAllEmployees();
        res.json(apiResponse(true, 'Empleados obtenidos', data));
    } catch (error) {
        next(error);
    }
};

export const addEmpleado = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const data = await empleadoRepository.createEmployee(req.body);
        res.status(201).json(apiResponse(true, 'Empleado guardado', data));
    } catch (error) {
        next(error);
    }
};

export const updateEmpleado = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const id = String(req.params.id);
        const data = await empleadoRepository.updateEmployee(id, req.body);
        res.json(apiResponse(true, 'Empleado actualizado', data));
    } catch (error) {
        next(error);
    }
};

export const deleteEmpleado = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const id = String(req.params.id);
        await empleadoRepository.deleteEmployee(id);
        res.json(apiResponse(true, 'Empleado eliminado'));
    } catch (error) {
        next(error);
    }
};
