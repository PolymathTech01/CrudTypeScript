import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';
dotenv.config();
const { MONGO_URI = 'localhost/api' } = process.env;
export const client = new MongoClient(MONGO_URI);
export const db = client.db();
