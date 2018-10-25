const request = require("supertest");
const app = require("../../../server/app");

describe("/api/products", () => {

  test("/api/products should respond to GET", async () => {
    const response = await request(app).get("/api/products");
    expect(response.statusCode).toBe(200);
  })

  test("/search should respond to GET", async () => {
    const response = await request(app).get("/api/products/search");
    expect(response.statusCode).toBe(200);
  })

  test("/search/suggestions should respond to GET", async () => {
    const response = await request(app).get("/api/products/search/suggestions");
    expect(response.statusCode).toBe(200);
  });


});
