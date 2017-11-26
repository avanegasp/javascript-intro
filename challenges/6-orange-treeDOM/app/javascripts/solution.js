// Tu codigo va aca
// function createTree (){
//   return tree{
//     age:0,
//     height:0,
//     orangeCount:0,
//     grow: function(){
//       this.age++ // this en este momento sería tree
//
//     }
//   }
// }


function createTree (){
  return new Tree()
}

function Tree(){ // atributos!!!!!!!!
  this.age = 0
  this.height = 0
  this.orangeCount = 0
  this.isAlive = true
  this.oranges =[]
  // this.grow = function(){
  //   this.age++
  //   this.height+=10
  // }
}

Tree.prototype={
    grow:function(){
      this.age +=1
      this.height +=10
      if(this.age === FRUIT_BEARING_AGE){
        orangesIn= Math.floor(Math.random()*15 + 1)
          this.orangeCount += orangesIn
          for(i=0; i<orangesIn; i++){
            this.oranges.push(pickOrange())
          }
    }
    this.die()
},
    die:function(){
      if(this.age <= MAX_AGE){
        this.isAlive = true
      }
      else{
        this.isAlive = false
    }
  },
  dropOrange:function(){
    return this.oranges.pop()
  }
}

var Orange =function(){ //modelo de naranja
  this.diameter = Math.floor(Math.random()*10 + 1)
}
var pickOrange=function(){
  return new Orange()
}


var FRUIT_BEARING_AGE = 4
var MAX_AGE = 10
