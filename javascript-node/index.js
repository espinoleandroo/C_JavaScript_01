//Callback
// const request = require('request');
//
// request('http://google.com', function(){
//   console.log('Termine la peticion de google');
// });
// console.log('despues de la peticion');


const rp = require('request-promise');
rp('http://google.com')
    .then(function(html){
      console.log('Termine');
    }).catch(function(err){
      console.log(err);
    })
