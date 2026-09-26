export interface IEmployeeRepository {
  getAllEmployees(): Promise<any[]>;
  getEmployeeById(id: string): Promise<any>;
  createEmployee(employeeData: any): Promise<any>;
  updateEmployee(id: string, employeeData: any): Promise<any>;
  deleteEmployee(id: string): Promise<void>;
}
