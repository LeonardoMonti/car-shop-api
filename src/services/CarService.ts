import { ICar, carVehicle } from '../interfaces/ICar';
import Service, { ServiceError } from '.';
import CarModel from '../models/Car';

class CarService extends Service<ICar> {
  constructor(model = new CarModel()) {
    super(model);
  }

  create = async (obj: ICar): Promise<ICar | ServiceError | null> => {
    const parsed = carVehicle.safeParse(obj);

    if (!parsed.success) return { error: parsed.error };

    return this.model.create(obj);
  };
}

export default CarService;