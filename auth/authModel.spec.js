const request = require("supertest");
const server = require("../api/server");
const db = require("../database/dbConfig");

beforeEach(() => {
  return db("users").truncate();
});

const testUser = {
  name: "ALengthyName",
  username: 'emkay',
  password: "ALongAssPassword",
  phone: "01299345"
};

describe("auth endpoints", () => {
  describe("register endpoint", () => {
    test("/register returns 200 OK", () => {
      return request(server)
        .post("/api/auth/register")
        .send(testUser)
        .expect(200);
    });
    test("/register returns actual user", async () => {
      const response = await request(server)
        .post("/api/auth/register")
        .send(testUser)
        
        expect(response.body.name).toBe(testUser.name)
        expect(response.body.phone).toBe(testUser.phone)
    });
    test("/register does not store password in plain text", async () => {
      const response = await request(server)
        .post("/api/auth/register")
        .send(testUser)
        
        expect(response.body.password).not.toBe(testUser.password);
    });
  });

  describe("login endpoint", () => {
    test("/login returns 200 OK", () => {
      return request(server)
        .post("/api/auth/login")
        .send(testUser)
        .expect(200);
    });
    test("/login returns a token", async () => {
      const response = await request(server)
        .post("/api/auth/login")
        .send(testUser)
        .expect(response.body.token)
        .not.toBe(null || undefined);
    });
    test("/login returns user whose username was passed in", async () => {
      const response = await request(server)
        .post("/api/auth/login")
        .send(testUser)

        expect(response.body.username).toBe(testUser.username)
    });
  });
});
