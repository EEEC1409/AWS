import { z } from 'zod';

export const EmployeeDTO = z.object({
  nombre: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
  cargo: z.string().min(2, 'El cargo debe tener al menos 2 caracteres'),
  departamento: z.string().min(2, 'El departamento debe tener al menos 2 caracteres'),
  sueldo: z.number().positive('El sueldo debe ser mayor a 0')
});

export type EmployeeDTO = z.infer<typeof EmployeeDTO>;
