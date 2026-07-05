import {BaseError} from './BaseError';

type Issue = {
  path: PropertyKey[];
  message: string;
};

export class ValidationError extends BaseError {
  public details: Array<{field: string; message: string}>;

  constructor(errors: Issue[]) {
    super(400, 'badRequest.validation', 'Erro de validação dos dados');
    this.details = errors.map((err) => ({
      field: err.path.map(String).join('.'),
      message: err.message
    }));
  }

  override getBody() {
    return {
      ...super.getBody(),
      details: this.details
    };
  }
}
