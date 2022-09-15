import { ZodError } from 'zod';
import MongoModel from '../models/MongoModel';

export interface ServiceError {
  error: ZodError;
}
abstract class Service<T> {
  constructor(protected model: MongoModel<T>) {}

  public async create(obj: T): Promise<T | null | ServiceError> {
    return this.model.create(obj);
  }
}

export default Service;