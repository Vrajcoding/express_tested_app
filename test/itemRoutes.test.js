import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "../index.js";

let createdItemId;

describe("Items api integration tests", () => {
  it("GET /items - should be return an initally empty array", async () => {
    const response = await request(app).get("/items");

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toEqual([]);
  });

  it("POST /items - should create a new item", async () => {
    const newItems = { name: "mechnical keyboard" };
    const response = await request(app)
         .post("/items")
         .send(newItems);
    
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe("Item succesfully push");
    expect(response.body.data.name).toBe(newItems.name);     

    createdItemId = response.body.data.id;
  });

  it("POST /items - should fail validation if name is missing", async () => {
    const badItem = { name: '   ' };
    const response = await request(app).post('/items').send(badItem);

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Item name is required");
  })

  it("DELETE /items/:id - should deleted the items according thier id", async () => {
    const response =  await request(app).delete(`/items/${createdItemId}`);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data.id).toBe(createdItemId);
  })
});
