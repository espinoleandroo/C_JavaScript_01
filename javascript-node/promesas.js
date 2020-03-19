Promise.resolve().then(function(){console.log(“Hola”)});
console.log(“Mundo”);

// const request = require('request');
//
// // function asincrono(){
// //   return new Promise(function(resolve,reject){
// //     resolve('Todo salio bien');
// //
// //     reject(new Error('Nose pudo completar'));
// //   });
// // }
//
// function leer(url){
//   return new Promise(function(resolve, reject) {
//     request(url, function(err, response){
//       if(err){
//         reject(err);
//       }else{
//         resolve(response)
//       }
//     })
//   });
// }
//
// leer('http://codigofacilito.com')
//   .then(function(response){
//     console.log(response);
//   })
//   .catch(function(err){
//     console.log(err);
//   })
