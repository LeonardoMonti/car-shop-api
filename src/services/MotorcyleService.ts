import { IMotorcycle, motorcycle, motorcycleZodSchema } from '../interfaces/IMotorcycle';
import { idCarZodSchema } from '../interfaces/ICarId';
import Service, { ServiceError } from '.';
import MotorcycleModel from '../models/Motorcycle';

class MotorcycleService extends Service<IMotorcycle> {
  constructor(model = new MotorcycleModel()) {
    super(model);
  }

  create = async (obj: IMotorcycle): Promise<IMotorcycle | ServiceError | null> => {
    const parsed = motorcycle.safeParse(obj);

    if (!parsed.success) return { error: parsed.error };

    return this.model.create(obj);
  };

  read = async (): Promise<IMotorcycle[]> => this.model.read();

  readOne = async (id: string): Promise<IMotorcycle | ServiceError | null> => {
    const parsed = idCarZodSchema.safeParse({ id });

    if (!parsed.success) return { error: parsed.error };

    return this.model.readOne(id);
  };

  update = async (id: string, obj: IMotorcycle): Promise<IMotorcycle | ServiceError | null> => {
    const parsedId = idCarZodSchema.safeParse({ id });

    if (!parsedId.success) return { error: parsedId.error };

    const parsed = motorcycleZodSchema.safeParse(obj);
    
    if (!parsed.success) return { error: parsed.error };
    return this.model.update(id, obj);
  };

  delete = async (id: string): Promise<IMotorcycle | ServiceError | null> => {
    const parsedId = idCarZodSchema.safeParse({ id });

    if (!parsedId.success) return { error: parsedId.error };

    return this.model.delete(id);
  };
}

export default MotorcycleService;