import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

const sql = neon(
    "postgresql://beat_cancer_owner:TK0nvwuPZDf9@ep-rough-fog-a1fyzekq.ap-southeast-1.aws.neon.tech/beat_cancer?sslmode=require"
);

export const db = drizzle(sql, { schema });