function plusoumoins(){
  //Cette fonction donne un nombre entier entre 0 et 99.
  var nombre = Math.floor((Math.random()*100));
  var essais = 0;
  var guess = parseInt(prompt("Devinez le nombre : "));
  //tant que le nombre n'est pas bon
  while(nombre != guess){
    //On donne l'indication
    if(guess < nombre){
      alert("C'est plus.");
    }else if(guess > nombre){
      alert("C'est moins.");
    }
    //On compte les essais
    essais++;
    //On réessaye de deviner
    guess = parseInt(prompt("Devinez le nombre : "));
  }
  alert("Bien joué, c'était bien " + nombre + ". Il vous aura fallu " + essais+" essais.");
}
