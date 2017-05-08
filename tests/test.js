/* global it, describe */

import salutare from '../src/salutare'
import chai from 'chai'

const expect = chai.expect

describe('Lets say hello', () => {
  describe('Lets say hello to Alberto', () => {
    it('should say Hello Alberto', ()=> {
      expect(salutare('Alberto')).to.be.equal.to('Hello Alberto')
    })

  })
})
