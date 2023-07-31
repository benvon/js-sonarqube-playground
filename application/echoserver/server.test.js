import request from 'supertest';
import app from './server';

describe('POST /echo', () => {
  it('responds with the echoed string', async () => {
    const response = await request(app)
      .post('/echo')
      .send({ string: 'hello world' })
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toEqual({ echoedString: 'hello world' });
  });
});