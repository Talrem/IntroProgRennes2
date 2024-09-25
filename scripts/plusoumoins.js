function plusoumoins(){
  var nombre = Math.floor((Math.random()*100));
  var essais = 0;
  var guess = parseInt(prompt("Devinez le nombre : "));
  while(nombre != guess){
    if(guess < nombre){
      alert("c'est plus.");
    }else{
      alert("c'est moins.");
    }
    essais++;
    guess = parseInt(prompt("Devinez le nombre : "));
  }
  alert("Bien joué, c'était bien " + nombre + ". Il vous aura fallu " + essais+" essais.");
}
