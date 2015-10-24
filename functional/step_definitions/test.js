var chai = require('chai')
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
var assert = chai.assert

module.exports = function(){
    this.Given(/I run a test step/, function(){
        assert.equal(1, 1)
    })
}