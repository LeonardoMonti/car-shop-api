import { ICar } from "../../interfaces/ICar";

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