var Promise = require("bluebird");
var fs = require("fs");
Promise.promisifyAll(fs);
var rp = require('request-promise');
var read= rp('http://www.google.com')
    read.then(function (htmlString) {
console.log('got google 1');      
return fs.readFileAsync("timeout.js", "utf8");
    },function(err){console.log('err');})
   .then(function (data) {
console.log('file read');
read.then(function(stri){console.log('in read with in file read')})
//return rp('http://www.google.com');
    })
    .catch(function (err) {
        // Crawling failed...
console.log('err in catch block');
    });

console.log('oeeeeeeeeennnnnnnddddddd');
read.then(function(str){
console.log('got gogle 2');
});
