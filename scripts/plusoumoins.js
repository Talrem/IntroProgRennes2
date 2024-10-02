function plusoumoins(){
  //Cette fonction donne un nombre entier entre 0 et 99.
  var nombre = Math.floor((Math.random()*100));
  var essais = 0;
  var guess = parseInt(prompt("Devinez le nombre : "));
  //tant que le nombre n'est pas bon
  while(nombre != guess){
    //On donne l'indication au joueur pour qu'il puisse affiner sa tentative
    if(guess < nombre){
      alert("C'est plus.");
    }else if(guess > nombre){
      alert("C'est moins.");
    }
    //On compte les essais
    //il y a plusieurs manières de changer la valeur d'un entier.
    /*
      On peut utiliser essais = essais + x; avec x qui vaudrait n'importe quel nombre
      On a également essais += x, toujours avec x qui vaudrait n'importe quel nombre
      Mais lorsque c'est un compteur, on peut juste utiliser l'instruction ++ pour l'incrémenter de 1. (remplacer + par - effectue l'instruction inverse, décrémentant la variable)
    */
    essais++;
    //On réessaye de deviner, car sinon, on serait dans une boucle infinie, car les conditions d'entrée dans la boucle ne changeraient pas.
    guess = parseInt(prompt("Devinez le nombre : "));
  }
  //Une fois que le nombre est le même, les conditions d'entrée dans la boucle ne sont plus respectées, on passe donc à la suite.
  alert("Bien joué, c'était bien " + nombre + ". Il vous aura fallu " + essais+" essais.");
}
