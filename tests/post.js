const supertest = require("supertest");
const { baseURL } = require("./utils/config");
const logResponse = require("./utils/logResponse");
const request = supertest(baseURL);

describe("POST Testing", () => {
  it("Post Create", async () => {
    const newUser = {
      name: "meliana",
      job: "singer",
    };
    const response = await request.post("users").send(newUser);
    logResponse(response);
  });

  it("Post Register Succesful", async () => {
    const newUser = {
      email: "john.holt@reqres.in",
      password: "123456",
    };
    const response = await request.post("register").send(newUser);
    logResponse(response);
  });

  it("Post Register Unsuccesful", async () => {
    const newUser = {
      password: "123456",
    };
    const response = await request.post("register").send(newUser);
    logResponse(response);
  });

  it("Post Login Succesful", async () => {
    const loginUser = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };
    const response = await request.post("login").send(loginUser);
    logResponse(response);
  });

  it("Post Login Unsuccesful", async () => {
    const loginUser = {
      email: "peter@klaven",
    };
    const response = await request.post("login").send(loginUser);
    logResponse(response);
  });
});
