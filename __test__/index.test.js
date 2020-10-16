const { it } = require('mocha');
const request = require('supertest');
const app = require('../index');
describe('GET /', () => {
    it('response with hello world', (done) => {
        request(app).get('/').expect('hello world', done);
    })
})