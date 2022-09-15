import { Model, Document, UpdateQuery } from 'mongoose';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  constructor(protected _model: Model<T & Document>) {}

  create = async (obj:T): Promise<T> => {
    const created = this._model.create({ ...obj });

    return created;
  };

  read = async (): Promise<T[]> => {
    const read = this._model.find();

    return read;
  };

  readOne = async (id: string): Promise<T | null> => {
    const readOne = this._model.findOne({ _id: id });

    return readOne;
  };

  update = async (id: string, obj: T): Promise<T | null> => {
    const updated = this._model.findOneAndUpdate(
      { _id: id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );

    return updated;
  };

  delete = async (id: string): Promise<T | null> => {
    const deleted = this._model.findOneAndDelete({ _id: id });
    
    return deleted;
  };
}

export default MongoModel;