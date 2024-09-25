function plusoumoinsFor(){
  //Cette fonction donne un nombre entier entre 0 et 99.
  var nombre = Math.floor((Math.random()*100));
  var essais = 10;
  var guess;
  var i;
  //On a le droit à dix essais
  //Un for est construit de la manière suivante :
  //for(affectation à l'entrée;condition pour continuer;opération à appliquer à chaque itération)
  for(i = 0 ; i < essais && guess!=nombre ; i++){
    //On devine le nombre
    guess = parseInt(prompt("Devinez le nombre : "));
    //On donne l'indication
    if(guess < nombre){
      alert("C'est plus.");
    }else if(guess > nombre){
      alert("C'est moins.");
    }
  }
  if(essais == i){
    alert("Vous avez échoué à deviner le nombre en "+ essais +" essais, le nombre était " + nombre);
  }else{
    alert("Bien joué, il vous restait "+ (essais-i) +" essais.");
  }
}
