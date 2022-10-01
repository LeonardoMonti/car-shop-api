import express from 'express';
import 'express-async-errors';
import { CarRoute, MotorcyleRoute } from './routes';

const app = express();

app.use(express.json());

app.get('/', (_request, response) => {
  response.json({ message: 'connect car shop API' });
});

app.use('/cars', CarRoute);

app.use('/motorcycles', MotorcyleRoute);

export default app;
