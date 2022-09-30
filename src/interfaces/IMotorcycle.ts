import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

const motorcycleZodSchema = z.object({
  category: z.enum([
    'Street',
    'Custom',
    'Trail',
  ]),
  engineCapacity: z.number({
    required_error: 'engine capacity quantity is required',
    invalid_type_error: 'engine capacity quantity must be a number',
  })
    .int({ message: 'engine capacity must be integer' })
    .min(100, { message: 'engine capacity quantity must be at least 100' })
    .max(2500, { message: 'engine capacity quantity must be at most 2500' }),
}); 

const motorcycle = motorcycleZodSchema.merge(vehicleZodSchema);

type IMotorcycle = z.infer<typeof motorcycle>;

export { IMotorcycle, motorcycle, motorcycleZodSchema };