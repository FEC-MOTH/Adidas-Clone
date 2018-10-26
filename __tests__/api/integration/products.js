const request = require("supertest");
const app = require("../../../server/app");
// const connection = require("../../../database/index");

beforeEach(() => {
  // await dropProductTables()
  // await dropCategoryTables()
  // await syncProductTables()
  // await syncCategoryTables()
  // token = await request(app)
  // .post(signupUrl)
});

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

  test("/search should respond to GET", async () => {
    const response = await request(app).get("/api/products/search");
    expect(response.statusCode).toBe(200);
  });

  test("/search/suggestions should respond to GET", async () => {
    const response = await request(app).get("/api/products/search/suggestions");
    expect(response.statusCode).toBe(200);
  });
});
