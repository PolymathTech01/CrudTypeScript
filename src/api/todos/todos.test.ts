import request from 'supertest';
import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';
dotenv.config();
import app from '../../app';

// beforeAll(async () => {
//   try {
//     await Todos.drop();
//   } catch (error) {}
// });

const { MONGO_URI = 'localhost/api' } = process.env;
beforeAll(async () => {
  const client = new MongoClient(MONGO_URI);
  try {
    await client.connect();
    console.log('successfully connected to database');
  } catch (error) {}
});

describe('GET /api/v1/todos', () => {
  it('responds with a json message', async () => {
    request(app)
      .get('/api/v1/todos')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty('length');
        expect(response.body.length).toBe(0);
      });
  });
});

// stopped at 25:40
