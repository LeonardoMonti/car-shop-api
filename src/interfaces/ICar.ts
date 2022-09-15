import { z } from 'zod';

import { vehicleZodSchema } from './IVehicle';

const carZodSchema = z.object({
  doorsQty: z.number({
    required_error: 'Doors quantity is required',
    invalid_type_error: 'Doors quantity must be a number',
  })
    .min(2, { message: 'Doors quantity must be at least 2' })
    .max(4, { message: 'Doors quantity must be at most 4' })
    .int({ message: 'Doors quantity must be integer' }),
  seatsQty: z.number({
    required_error: 'Seats quantity is required',
    invalid_type_error: 'Seats quantity must be a number',
  })
    .min(2, { message: 'Seats quantity must be at least 2' })
    .max(7, { message: 'Seats quantity must be at most 7' })
    .int({ message: 'Seats quantity must be integer' }),
});

// ref: https://www.npmjs.com/package/zod/v/1.11.17#merge-property
const carVehicle = carZodSchema.merge(vehicleZodSchema);

type ICar = z.infer<typeof carVehicle>;

export { ICar, carZodSchema, carVehicle };