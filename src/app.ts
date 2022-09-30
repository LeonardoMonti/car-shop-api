import express from 'express';
import 'express-async-errors';
import { CarRoute, MotorcyleRoute } from './routes';

const app = express();
app.use(express.json());

app.use(CarRoute);
app.use(MotorcyleRoute);

export default app;
