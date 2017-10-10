process.env.NODE_ENV = 'test';
const {expect} = require('chai');
const request = require('supertest');
const server = require('../server');
const saveTestData = require('../seed/test.seed');
const config = require('../config');
const db = config.DB[process.env.NODE_ENV] || process.env.DB;
const mongoose = require('mongoose');

describe('API', function () {
  // let usefulIds;
  beforeEach((done) => {
    mongoose.connection.dropDatabase()
      .then(() => saveTestData(db, done));
  });
  describe('GET /', function () {
    it('responds with status code 200', function (done) {
      request(server)
        .get('/')
        .end((err, res) => {
          if (err) done(err);
          else {
            expect(res.status).to.equal(200);
            done();
          }
        });
    });
  });
  describe('GET /api/topics', () => {
    it('responds with topics', (done) => {
      request(server)
      .get('/api/topics')
      .end((err, res) => {
        console.log(res.body)
        expect(res.status).to.equal(200);
        expect(res.body.topics).to.be.an('array');
        expect(res.body.topics.length).to.equal(3);
        done();
      });
    });
  });
});