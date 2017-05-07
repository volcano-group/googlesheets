let chai = require('chai')
let should = chai.should();
let app = require('../src/index.js');

describe('Salutare', () => {
    it('it should say Hello Alberto', (done) => {
        app('Alberto').end((res) => {
            res.should.equal.to('Hello World');
        })
    })
})

