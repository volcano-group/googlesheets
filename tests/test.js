let chai = require('chai')
let should = chai.should();
let app = require('../src/index.js');

describe('Salutare', () => {
    it('it should say Hello', (done) => {
        app.salutare('Alberto').end((res) => {
            res.should.equal.to('Hello World');
        })
    })
})

