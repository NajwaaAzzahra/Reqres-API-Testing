const supertest = require('supertest');
const { baseURL } = require("./utils/config");
const logResponse = require("./utils/logResponse");
const request = supertest(baseURL);

describe('PATCH Testing', () => {
    it('Patch User ID 2', async () => {
        const updateUser = {
            'job': 'farmer'
        };
        const response = await request.patch('users/2').send(updateUser);
        logResponse(response);
    })
})