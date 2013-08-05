var cheerio = require('cheerio')
var request = require('request')
var Buffer  = require('buffer').Buffer
var encoding = require('./Unzipper.js/src/encoding.js')
var Iconv = require('iconv').Iconv
function getFlavor(callback){
  var flavorUrl = "http://www.31ice.co.jp/contents/product/flavor/index.html"
  request(flavorUrl, function(err, response, body){
    var conv = new Buffer(response.body)
    var iconv = new Iconv('EUC-JP','UTF-8//TRANSLIT//IGNORE')
    conv = iconv.convert(conv)
    conv = conv.toString()
    console.log(conv);
    //console.log(encoding.Encoding.isEUCJP(response.body))//.join(""));
    parse(conv)
    callback()
  })
}

function parse(html){
  var $ = cheerio.load(html)
  var names = []
  $('#seasonFlavorPhoto img').each(function(){
    var name = $(this).attr("alt")
    names.push(name)
    console.log(name);
    return name
  })
}

module.exports = function(callback){
  getFlavor(callback)
}