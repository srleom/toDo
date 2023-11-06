import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema.js';

import 'dotenv/config';

const connectionString = process.env.DATABASE_URL;
// @ts-ignore
const client = postgres(connectionString);
const db = drizzle(client, { schema });

export default db;
