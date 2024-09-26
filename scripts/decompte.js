function decompte(){
  //parseInt indique que c'est un nombre entier
  var n = parseInt(prompt("Donnez-moi un nombre","5"));
  //Le while() est également une vérification. Le contenu du while(expression booléenne){contenu} va être executé tant que l'expression booléenne est vraie.
  //Il faut donc faire attention à ne pas créer des boucles infinies qui peuvent être difficile à débug (puisque le navigateur plante et ne permet pas d'ouvrir la console)
  //Pour éviter ça, il faut toujours que la condition de sortie du while() soit modifiée dans sa boucle
  while(n>=0){
    //Un décompte doit se finir par 0
    alert(n);
    n--;
  }
}
