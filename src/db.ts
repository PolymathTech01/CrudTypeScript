import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';
dotenv.config();
const { MONGO_URI = 'localhost/api' } = process.env;
export const client = new MongoClient(MONGO_URI);
export const db = client.db();
async function run() {
  try {
    await client.connect();
    console.log('successfully connected to database.........');
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
