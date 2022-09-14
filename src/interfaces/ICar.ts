import { z } from 'zod';

import { vehicleZodSchema } from './IVehicle';

const carZodSchema = z.object({
  doorsQty: z.number().min(2).max(4).int(),
  seatsQty: z.number().min(2).max(7).int(),
});

// ref: https://www.npmjs.com/package/zod/v/1.11.17#merge-property
const carVehicle = carZodSchema.merge(vehicleZodSchema);

type ICar = z.infer<typeof carVehicle>;

export { ICar, carZodSchema, carVehicle };