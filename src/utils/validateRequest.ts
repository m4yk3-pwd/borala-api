import {ZodSchema} from 'zod';
import {ValidationError} from '../exception/ValidationError';
import {Request} from 'express';
import {ForbiddenAccessError} from '../exception/ForbiddenAccessError';
import {BadRequestError} from '../exception/BadRequestError';

export function validateSchema<T>(schema: ZodSchema<T>, data: unknown): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    throw new ValidationError(result.error.issues);
  }
  return result.data;
}

export function getIdParam(req: Request): string {
  const {id} = req.params;

  if (typeof id !== 'string' || !id) {
    throw new BadRequestError('ID inválido');
  }

  return id;
}

export function validateId(req: Request) {
  const id = getIdParam(req);
  const userId = (req as any).auth.userId;

  if (userId !== id) {
    throw new ForbiddenAccessError();
  }

  return id;
}
