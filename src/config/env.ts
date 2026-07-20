import { config } from 'dotenv';
config();
import { z } from 'zod';

const envSchema = z.object({
    PORT: z.coerce.number(),
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

const env = envSchema.parse(process.env);
// If PORT exists and is a string → it returns a new object (env) with PORT guaranteed to be there, and TypeScript now knows its exact type.
// If PORT is missing or the wrong type → it throws an error immediately, crashing the app right at startup with a clear message like "PORT is required."

export default env;