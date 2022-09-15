import { Request, Response } from 'express';
import { Service } from '../services';

export type ResponseError = {
  error: unknown;
};

export interface RequestBody<T> extends Request {
  body: T;
}

enum ControllerErrors {
  internal = 'Internal Server Error',
  notFound = 'Object not found',
}

export abstract class Controller<T> {
  abstract route: string;

  protected errors = ControllerErrors;

  constructor(protected service: Service<T>) {}

  abstract create(
    req: RequestBody<T>,
    res: Response<T | ResponseError>,
  ): Promise<typeof res>;
}
