import type { Request, Response, NextFunction } from 'express';
import type { ZodSchema } from 'zod';

export const validateDTO = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({
        success: false,
        message: 'Error de validación en los datos enviados',
        errors: result.error.issues.map((err) => ({
          campo: err.path.join('.'),
          mensaje: err.message,
        })),
      });
      return;
    }

    req.body = result.data;
    next();
  };
};
