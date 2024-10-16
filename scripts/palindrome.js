function palimdrome(){
  var mot = prompt("Donnez moi un mot : ").toLowerCase();
  var nbE = 0;
  //on utilise le for pour parcourir le mot lettre par lettre comme un tableau
  for(var i = 0; i < mot.length ; i++){
    /*
    On compare la première lettre et la dernière Lettre
    vu que le parcours commence à 0 et que la length est un vrai nombre, il faut faire moins un à length. Car mot[mot.length] n'est pas défini)
    En retirant ensuite i, on parcours le mot dans les deux sens à la fois, ce qui nous permet de comparer.
    */
    if(mot[i] != mot[mot.length - 1 - i]) return alert("Le mot n'est pas un palimdrome");
    //Si jamais les lettres sont différentes, on va exécuter l'instruction return, ce qui va mettre fin au programme en affichant que ce n'est pas un palimdrome.
  }
  //Mais si jamais on sort de la boucle for, c'est que le programme n'a pas été stoppé, c'est donc un palimdrome.
  alert("Le mot est un palimdrome");
}
