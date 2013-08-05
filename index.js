var cheerio = require('cheerio')
var request = require('request')
var Buffer  = require('buffer').Buffer
var Iconv   = require('iconv').Iconv

function getPage(callback){
  var flavorUrl = "http://www.31ice.co.jp/contents/product/flavor/index.html"
  request({ url : flavorUrl, encoding :null }, function(err, response, body){
    var conv = response.body
    var iconv = new Iconv('EUC-JP','UTF-8//TRANSLIT//IGNORE')
    conv = iconv.convert(conv)
    conv = conv.toString()
    //console.log(encoding.Encoding.isEUCJP(response.body))//.join(""));
    callback(conv)
  })
}

function getFlavor(callback){
  getPage(function(body){
    callback(null, parseFlavors(body))
  })
}

function parseFlavors(html){
  var $ = cheerio.load(html)
  var names = []
  // fravor for month
  names.push($("#fomName").text())
  // season flavor
  $('#seasonFlavorPhoto img').each(function(){
    var name = $(this).attr("alt")
    names.push(name)
  })
  return names
}

module.exports = function(callback){
  getFlavor(callback)
}