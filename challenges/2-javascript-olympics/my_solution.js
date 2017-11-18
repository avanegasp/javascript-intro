 // U3.W7: JavaScript Olympics

// Integrantes parejas: nombre1, nombre2


// 0. Objetos
function Athlete(){}
var athlete = {
  name : "Angie",
  height: 31,
  sport : "tennis"
}
//objetos literales
var angie ={
  name:angie,
  sport:tennis,
  height:30
}

var james = {
  name: "James",
  sport: "Futbol",
  height: 13
}

var falcao = {
  name: "falcao",
  sport: "Futbol",
  height: 13
}



// 1. Añadir propiedades a objetos
var addWinToAthletes = function(atletas){
  atletas.forEach(function(atleta){
    atleta.win = function(event){
      console.log(`${this.name} won the ${event}`)
    }
  })
}

falcao.win(eurocopa)

var addWinToAthelete = function(atletas) {
  atletas.forEach(function(atleta){
    atleta.win = function(event) {
      console.log(`${this.name} won the ${event}`)
    }
  })
}

// 2. Voltea un String
function name (string){
  return string.split("").reverse().join("")
}

// 3. Remueve numeros impares
var numeros = [4,5,22,1,77,8]
var impar = numeros.filter(function(numero){
  return numero % 2 === 1
})

var numeros = [4,5,22,1,77,8]
var num_impares = []
for(var i = numeros.length; i>0; i--;){
  var numero = numero[i]
  if(numero % 2 == 1){
    num_impares.push(numero)
  }
  console.log(num_impares)
}



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




function(num){
  for(var i=0; i<num.length; i++){
    if (num % 2 == 0){
      "hola soy par"
    }else{
      "hola soy impar"
    }
  }
}
