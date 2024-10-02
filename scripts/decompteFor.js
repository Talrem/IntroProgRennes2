function decompteFor(){
  //parseInt indique que c'est un nombre entier
  var n = parseInt(prompt("Donnez-moi un nombre","5"));
  //Pour le for, on initialise une variable (ici, pas besoin car elle a déjà été initialisée, donc on peut laisser vide et juste mettre ; pour passer à la partie suivante), on donne une condition de sortie, et un opération effectuée à chaque boucle (ici, décrémenter le compteur.)
  for(;n>=0;n--){
    //Un décompte doit se finir par 0, donc >=0;
    alert(n);
  }
}
