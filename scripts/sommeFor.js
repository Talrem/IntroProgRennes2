function sommeFor(){
  //n est la somme de nos éléments
  var n=0;
  //i est un compteur
  var i;
  //On déclare que i = 0 pour la première boucle. On dit que la boucle continue tant que i < 10. On dit que i est incrémenté de 1 à chaque boucle.
  for(i = 0; i<10;i++){
    //on utilise l'opérateur += pour modifier la valeur de n avec l'input de l'utilisateur.
    n+=parseInt(prompt("Entrez votre nombre : "));
  }
  //j'ai mis \n dans mon texte. Mais ce n'est pas affiché par l'ordinateur. Parce que \n est une indication que je veux aller à la ligne.
  alert("La somme de vos nombres est égale à "+n+".\nEt leur moyenne est égale à "+(n/i)+".");
}
