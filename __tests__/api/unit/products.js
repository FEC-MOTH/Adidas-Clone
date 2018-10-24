const request = require('supertest');
const app = require('../../../server/app');

describe('/api/products', () => {
  test('/ should respond to GET', (done) => {
      request(app).get('/api/products').then((response) => {
          expect(response.statusCode).toBe(200);
          done();
      });
  });

  test('/search should respond to GET', (done) => {
    request(app).get('/api/products/search').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    })
  });

  test('/search/suggestions should respond to GET', (done) => {
    request(app).get('/api/products/search/suggestions').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    })
  });
  });