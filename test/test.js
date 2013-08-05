describe('cotton candy!', function () {
  it('get flavor', function (done) {
    var cc = require('../index.js')
    cc(function(err, name){
      console.log(name);
      done()
    })
  });
});