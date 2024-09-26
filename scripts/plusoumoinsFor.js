function plusoumoinsFor(){
  //Cette fonction donne un nombre entier entre 0 et 99.
  var nombre = Math.floor((Math.random()*100));
  //On a le droit à dix essais
  var essais = 10;
  var guess;
  //ici, i est un compteur qui va nous permettre de savoir si on a épuisé nos essais.
  var i;
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
    //lorsque l'on fait des opérations mathématiques dans un alert, il faut les mettre entre parenthèses
    //alert("Bien joué, il vous restait "+ essais-i +" essais."); ferait planter le programme parce que faire -i sur un string n'a pas de sens
    alert("Bien joué, il vous restait "+ (essais-i) +" essais.");
  }
}
