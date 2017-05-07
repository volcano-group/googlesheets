let chai = require('chai')
let should = chai.should();
import salutare from '../src/salutare';

describe('Salutare', () => {
    it('it should say Hello Alberto', (done) => {
        salutare.salutare('Alberto').end((res) => {
            res.should.equal.to('Hello World');
        })
    })
})

