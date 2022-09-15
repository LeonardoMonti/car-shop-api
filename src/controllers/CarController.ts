import { Response } from 'express';
import Controller, { RequestBody, ResponseError } from '.';
import Service from '../services';
import { ICar } from '../interfaces/ICar';

class CarController extends Controller<ICar> {
  constructor(private service: Service<ICar>) {
    super(service);
  }

  create = async (
    req: RequestBody<ICar>,
    res: Response<ICar | ResponseError>,
  ): Promise<typeof res> => {
    const { body } = req;
    try {
      const car = await this.service.create(body);

      if (!car) return res.status(404).json({ error: this.errors.notFound });

      if ('error' in car) return res.status(400).json(car);

      return res.status(201).json(car);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };
}

export default CarController;