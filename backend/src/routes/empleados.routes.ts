import { Router } from 'express';
import * as empleado from '../controllers/empleados.controllers.js';
import { validateDTO } from '../middlewares/validate.middleware.js';
import { EmployeeDTO } from '../dtos/employee.dto.js';

const router = Router();

router.get(['/empleados', '/employees'], empleado.getEmpleado);
router.post(['/empleados', '/employees'], validateDTO(EmployeeDTO), empleado.addEmpleado);
router.put(['/empleados/:id', '/employees/:id'], validateDTO(EmployeeDTO.partial()), empleado.updateEmpleado);
router.delete(['/empleados/:id', '/employees/:id'], empleado.deleteEmpleado);

export default router;