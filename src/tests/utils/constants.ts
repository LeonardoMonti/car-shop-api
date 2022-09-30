import { ICar } from "../../interfaces/ICar";
import { IMotorcycle } from "../../interfaces/IMotorcycle";

export const idValid = 'aB1cD2eF3gH4iJ5kL6mN7oP8';

export const validCar: ICar & { _id: string }= {
  _id: idValid,
  model: 'Mercedes Benz GLC',
  year: 2020,
  color: 'black',
  buyValue: 63000,
  doorsQty: 4,
  seatsQty: 2,
};

export const validCarUpdated: ICar & { _id: string } = {
  _id: idValid,
  model: 'Corolla GR Sport',
  year: 2022,
  color: 'white',
  buyValue: 12000,
  doorsQty: 4,
  seatsQty: 2,
};

export const validMotorcycle: IMotorcycle & { _id: string }= {
  _id: idValid,
  model: 'Honda CB 600',
  year: 2020,
  color: 'black',
  buyValue: 19000,
  category: 'Street',
  engineCapacity: 2000
};

export const validMotorcycleUpdated: IMotorcycle & { _id: string } = {
  _id: idValid,
  model: 'Honda CB 1000',
  year: 2022,
  color: 'white',
  buyValue: 50000,
  category: 'Street',
  engineCapacity: 2499
};