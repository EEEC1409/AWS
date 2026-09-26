import { Schema, model, type Document } from 'mongoose';

export interface IEmployee extends Document {
  nombre: string;
  cargo: string;
  departamento: string;
  sueldo: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const empleadoSchema = new Schema<IEmployee>(
  {
    nombre: { type: String, required: true },
    cargo: { type: String, required: true },
    departamento: { type: String, required: true },
    sueldo: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const EmployeeModel = model<IEmployee>('Empleado', empleadoSchema);
export default EmployeeModel;
