import { ICar, carVehicle } from '../interfaces/ICar';
import { idCarZodSchema } from '../interfaces/ICarId';
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

  read = async (): Promise<ICar[]> => this.model.read();

  readOne = async (id: string): Promise<ICar | ServiceError | null> => {
    const parsed = idCarZodSchema.safeParse({ id });

    if (!parsed.success) return { error: parsed.error };

    return this.model.readOne(id);
  };
}

export default CarService;