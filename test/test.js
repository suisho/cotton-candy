var cc = require('../index.js')
var assert = require('assert')
describe('cotton candy!', function () {
  it('get flavor', function (done) {
    cc(function(err, flavors){
      console.log(flavors);
      assert(flavors.length > 0)
      done()
    })
  })
  it('コットンキャンディ', function(done){
    var targetFlavor = "コットン"
    var reg = new RegExp(".*" + targetFlavor + ".*")
        
    cc(function(err, flavors){
      flavors.forEach(function(flavor){
        assert.equal(false, reg.test(flavor), flavor + " has comming!!!! Let's GO 31!!!")
      })
      done()
    })
  })

});