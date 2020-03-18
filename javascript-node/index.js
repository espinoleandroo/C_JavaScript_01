//Callback
const request = require('request');

request('http://google.com', function(){
  console.log('Termine la peticion de google');
});
console.log('despues de la peticion');
