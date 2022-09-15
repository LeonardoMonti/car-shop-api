import { Request, Response } from 'express';
import Controller, { RequestBody, ResponseError } from '.';
import { ICar } from '../interfaces/ICar';
import CarService from '../services/CarService';

class CarController extends Controller<ICar> {
  constructor(service = new CarService()) {
    super(service);
  }

  create = async (
    req: RequestBody<ICar>,
    res: Response<ICar | ResponseError>,
  ): Promise<typeof res> => {
    const { body } = req;
    try {
      const car = await this._service.create(body);

      if (!car) return res.status(404).json({ error: this.errors.notFound });

      if ('error' in car) return res.status(400).json(car);

      return res.status(201).json(car);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  read = async (
    _req: Request,
    res: Response<ICar[] | ResponseError>,
  ): Promise<typeof res> => {
    try {
      const cars = await this._service.read();
      return res.status(200).json(cars);
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  readOne = async (
    req: Request<{ id: string }>,
    res: Response<ICar | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const car = await this._service.readOne(id);
      
      if (!car) return res.status(404).json({ error: this.errors.notFound });

      if ('error' in car) {
        return res.status(400).json({ error: this.errors.idLength });
      }
      
      return res.status(200).json(car);
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  }; 
}

export default CarController;