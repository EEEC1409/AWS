import { EmployeeModel } from '../models/employee.model.js';
import type { IEmployeeRepository } from './employee.repository.interface.js';

export class MongoEmployeeRepository implements IEmployeeRepository {
    async getAllEmployees(): Promise<any[]> {
        return await EmployeeModel.find();
    }

    async getEmployeeById(id: string): Promise<any> {
        return await EmployeeModel.findById(id);
    }

    async createEmployee(employeeData: any): Promise<any> { 
        const newEmployee = new EmployeeModel(employeeData);
        return await newEmployee.save(); 
    }

    async updateEmployee(id: string, employeeData: any): Promise<any> {
        return await EmployeeModel.findByIdAndUpdate(id, employeeData, { new: true });
    }

    async deleteEmployee(id: string): Promise<void> {
        await EmployeeModel.findByIdAndDelete(id);
    }
}