import CarRoute from './routes/CarRoute';
import App from './app';

import CarController from './controllers/CarController';

import { ICar } from './interfaces/ICar';

const server = new App();

const carController = new CarController();

const carRouter = new CarRoute<ICar>();

carRouter.addRoute(carController);

server.addRouter(carRouter.router);

export default server;