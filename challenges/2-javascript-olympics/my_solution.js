 // U3.W7: JavaScript Olympics

// Integrantes parejas: nombre1, nombre2


// 0. Objetos

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

var addWinToAthelete = function(atletas) {
  atletas.forEach(function(atleta){
    atleta.win = function(event) {
      console.log(`${this.name} won the ${event}`)
    }
  })
}

// 2. Voltea un String

// 3. Remueve numeros impares

// 4. Funcion constructora

// 5. Reflexion


/////// Pruebas //////////
var michaelPhelps = new Athlete("Michael Phelps", 29, "swimming")

console.log(michaelPhelps.constructor === Athlete)
console.log((michaelPhelps.name + " " + michaelPhelps.sport + " " + michaelPhelps.age) === 'Michael Phelps swimming 29')
