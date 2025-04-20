const supertest = require("supertest");
const { baseURL } = require("./utils/config");
const logResponse = require("./utils/logResponse");
const request = supertest(baseURL);

describe('PUT Testing', () => {
    it('Put User Id 2', async() => {
        const updateUser = {
            "name": "morpheus",
            "job": "driver"
        }
        const response = await request.put('users/2').send(updateUser)
        logResponse(response)
    })
})