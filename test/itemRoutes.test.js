import { describe, it, expect, beforeAll, afterEach, afterAll } from "vitest";
import request from "supertest";
import { app } from "../index.js";
import { connectTestDB, clearTest, closeTestDB } from "./dbsetup.js";

beforeAll(async () => await connectTestDB());
afterEach(async () => await clearTest());
afterAll(async () => await closeTestDB());


describe("Items api integration tests", () => {
  it("GET /items - should be return an initally empty array", async () => {
    const response = await request(app).get("/items");

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toEqual([]);
  });

  it("POST /items - should create a new item", async () => {
    const newItems = { name: "mechnical keyboard", price: "200", description: "helloo kam cho kash kay" };
    const response = await request(app)
      .post("/items")
      .send(newItems);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe("Item succesfully push");
    expect(response.body.data.name).toBe(newItems.name);

  });

  it("POST /items - should fail validation if name is missing", async () => {
    const badItem = { name: '   ' };
    const response = await request(app).post('/items').send(badItem);

    expect(response.status).toBe(400);
    expect(response.body.error).toBeUndefined();
  })

  it("DELETE /items/:id - should deleted the items according thier id", async () => {
    const setupResponse = await request(app)
      .post("/items")
      .send({ name: "router", price: "200", description: "hello bhoyo" });
    const id = setupResponse.body.data._id;
    const response = await request(app).delete(`/items/${id}`);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data._id).toBe(id);
  })
});
