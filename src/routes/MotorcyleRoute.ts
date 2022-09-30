import { Router } from 'express';
import MotorcycleModel from '../models/Motorcycle';
import MotorcycleService from '../services/MotorcyleService';
import MotorcycleController from '../controllers/MotorcyleController';

const route = Router();

const motorcycle = new MotorcycleModel();
const motorcycleService = new MotorcycleService(motorcycle);
const motorcycleController = new MotorcycleController(motorcycleService);

const MOTORCYCLE = '/motorcycles';

route.post(`${MOTORCYCLE}`, (req, res) => motorcycleController.create(req, res));

route.get(`${MOTORCYCLE}`, (req, res) => motorcycleController.read(req, res));

route.get(`${MOTORCYCLE}/:id`, (req, res) => motorcycleController.readOne(req, res));

route.put(`${MOTORCYCLE}/:id`, (req, res) => motorcycleController.update(req, res));

route.delete(`${MOTORCYCLE}/:id`, (req, res) => motorcycleController.delete(req, res));

export default route;