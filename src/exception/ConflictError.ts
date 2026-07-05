import {BaseError} from './BaseError';

export class ConflictError extends BaseError {
  constructor(message = 'Recurso já existe') {
    super(409, 'conflict.duplicate', message);
  }
}
