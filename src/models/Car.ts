import { Schema, model as createModel, Document } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './MongoModel';

interface CarDocument extends ICar, Document {}

const carSchema = new Schema<CarDocument>(
  {
    model: String,
    year: Number,
    status: String,
    color: String,
    buyValue: Number,
    doorsQty: Number,
    seatsQty: Number,
  },
  {
    versionKey: false,
  },
);

class CarModel extends MongoModel<ICar> {
  constructor(model = createModel('Cars', carSchema)) {
    super(model);
  }
}

export default CarModel;