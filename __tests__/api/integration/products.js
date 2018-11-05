const request = require("supertest");
const app = require("../../../server/app");
const { Product } = require("../../../database/models");
const { dropProducts, syncProducts } = require('../../../database/utils/testUtils');

beforeEach(async () => {
  await dropProducts();
  await syncProducts();
});

afterAll(() => {
  Product.sequelize.close();
})

/* example tests
it('should fetch all users', async() => {
  expect.assertions(2);
  const { statusCode } = await request(app)
    .post('/api/users')
    .send({
      name: 'hayden',
      password: 'hayden'
    })
    const { statusCode } = await request(app)
    .post('/api/users')
    .send({
      name: 'hayden1',
      password: 'hayden1'
    })

    expect(statusCode).toBe(200);
    const { data } = await request(app)
      .get('/api/users')
    expect(data.length).toBe(2);
})
*/

describe("/api/products", () => {
  test("/api/products should respond to GET", async () => {
    const response = await request(app).get("/api/products");
    expect(response.statusCode).toBe(200);
  });

  test("/search/:query should respond to GET", async () => {
    const response = await request(app).get("/api/products/search");
    expect(response.statusCode).toBe(200);
  });

  test("/search/suggestions/:query should respond to GET", async () => {
    const response = await request(app).get("/api/products/search/suggestions");
    expect(response.statusCode).toBe(200);
  });
});
