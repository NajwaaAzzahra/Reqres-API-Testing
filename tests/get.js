const supertest = require("supertest");
const { baseURL } = require("./utils/config");
const logResponse = require("./utils/logResponse");
const request = supertest(baseURL);

describe("GET Testing", () => {
  it("Get List User", async () => {
    const response = await request.get("users").query({ page: "2" });
    logResponse(response);
  });

  it("Get Single User", async () => {
    const response = await request.get("users/2");
    logResponse(response);
  });

  it("Get Single User Not Found", async () => {
    const response = await request.get("users/23");
    logResponse(response);
  });

  it("Get List <Resource>", async () => {
    const response = await request.get("unknown");
    logResponse(response);
  });
  it("Get Single <Resource>", async () => {
    const response = await request.get("unknown/2");
    logResponse(response);
  });
  it("Get Single <Resource> Not Found", async () => {
    const response = await request.get("unknown/23");
    logResponse(response);
  });
  it("Get Delayed Response", async function () {
    this.timeout(5000);
    const response = await request.get("users/").query({ delay: "3" });
    logResponse(response);
  });
});
