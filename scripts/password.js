function password(){
  //premièrement on définit le mot de passe qui devra être répété
  var password = prompt("Définissez votre mot de passe : ");
  //On peut tout à fait avoir une prompt dans une boucle, car la prompt renvoit une valeur.
  //Ici, la valeur est comparée au mot de passe, et si elle sont différentes, c'est le signe !=, alors on va effectuer les instructions du while
  while(password!=prompt("Saisissez votre mot de passe : ")){
    //donc ici
    alert("Le mot de passe que vous avez saisi est incorrect.");
  }
  //Cependant, si l'évaluation de password différent du prompt renvoit faux, c'est que les deux sont identiques, on ne va donc pas rentrer dans le while et executer les instructions qui le suivent.
  alert("Mot de passe correct.");
}
