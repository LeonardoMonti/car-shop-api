import { Request, Response } from 'express';
import Service from '../services';

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

abstract class Controller<T> {
  protected errors = ControllerErrors;

  constructor(protected _service: Service<T>) {}

  abstract create(
    req: RequestBody<T>,
    res: Response<T | ResponseError>,
  ): Promise<typeof res>;

  abstract read(
    _req: Request,
    res: Response<T[] | ResponseError>,
  ): Promise<typeof res>;
}

export default Controller;