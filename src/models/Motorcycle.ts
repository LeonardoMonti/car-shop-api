import { Schema, model as createModel, Document } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoModel from './MongoModel';

interface MotorcycleDocument extends IMotorcycle, Document {}

const motorcycleSchema = new Schema<MotorcycleDocument>(
  {
    model: String,
    year: Number,
    status: String,
    color: String,
    buyValue: Number,
    category: {
      type: String,
      enum: ['Street', 'Custom', 'Trail'],
    },
    engineCapacity: Number,
  },
  {
    versionKey: false,
  },
);

class MotorcycleModel extends MongoModel<IMotorcycle> {
  constructor(model = createModel('Motorcycle', motorcycleSchema)) {
    super(model);
  }
}

export default MotorcycleModel;