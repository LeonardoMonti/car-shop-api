import { Request, Response } from 'express';
import Controller, { RequestBody, ResponseError } from '.';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MotorcycleService from '../services/MotorcyleService';

class MotorcycleController extends Controller<IMotorcycle> {
  constructor(service = new MotorcycleService()) {
    super(service);
  }

  create = async (
    req: RequestBody<IMotorcycle>,
    res: Response<IMotorcycle | ResponseError>,
  ): Promise<typeof res> => {
    const { body } = req;
    try {
      const motorcycle = await this._service.create(body);

      if (!motorcycle) return res.status(404).json({ error: this.errors.notFound });

      if ('error' in motorcycle) return res.status(400).json(motorcycle);

      return res.status(201).json(motorcycle);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  read = async (
    _req: Request,
    res: Response<IMotorcycle[] | ResponseError>,
  ): Promise<typeof res> => {
    try {
      const motorcycles = await this._service.read();
      return res.status(200).json(motorcycles);
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  readOne = async (
    req: Request<{ id: string }>,
    res: Response<IMotorcycle | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const motorcycle = await this._service.readOne(id);
      
      if (!motorcycle) return res.status(404).json({ error: this.errors.notFound });

      if ('error' in motorcycle) {
        return res.status(400).json({ error: this.errors.idLength });
      }
      
      return res.status(200).json(motorcycle);
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  update = async (
    req: Request<{ id: string }>,
    res: Response<IMotorcycle | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: this.errors.requiredId });

    try {
      const { body } = req;
      const motorcycle = await this._service.update(id, body);
      if (!motorcycle) return res.status(404).json({ error: this.errors.notFound });
      if ('error' in motorcycle) {
        return res.status(400).json({ error: this.errors.idLength });
      }
      return res.status(200).json(motorcycle);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  delete = async (
    req: Request<{ id: string }>,
    res: Response<IMotorcycle | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;

    if (!id) return res.status(400).json({ error: this.errors.requiredId });

    try {
      const motorcycle = await this._service.delete(id);
      
      if (motorcycle === null) return res.status(404).json({ error: this.errors.notFound });

      if ('error' in motorcycle) {
        return res.status(400).json({ error: this.errors.idLength });
      }

      return res.status(204).send();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: this.errors.internal });
    }
  };
}

export default MotorcycleController;