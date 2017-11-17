//  // U3.W7: JavaScript Olympics
//
// // Integrantes parejas: nombre1, nombre2
//
//
// // 0. Objetos
// function Athlete(){}
// var athlete = {
//   name : "Angie",
//   height: 31,
//   sport : "tennis"
// }
//
// // 1. Añadir propiedades a objetos
// function Athlete (event){
//   win : "Angie"
// }
//
// // 2. Voltea un String
// function name (string){
//   return string.split("").reverse().join("")
// }
//
// // 3. Remueve numeros impares
// var numeros = [4,5,22,1,77,8]
// var par = numeros.filter(function(numero){
//   return numero % 2 === 0
// })
//
// var numeros = [4,5,22,1,77,8]
// var num_pares = []
// for(var i = numeros.length; i>0; i--;){
//   var numero = numero[i]
//   if(numero % 2 == 0){
//     num_pares.push(numero)
//   }
//   console.log(num_pares)
// }
//


// 4. Funcion constructora
function Athlete(name, age, sport){
  this.name = name,
  this.age = age,
  this.sport = sport
}

// 5. Reflexion


/////// Pruebas //////////
var michaelPhelps = new Athlete("Michael Phelps", 29, "swimming")

console.log(michaelPhelps.constructor === Athlete)
console.log((michaelPhelps.name + " " + michaelPhelps.sport + " " + michaelPhelps.age) === 'Michael Phelps swimming 29')
