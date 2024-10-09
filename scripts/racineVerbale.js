function racineVerbale(){
  var mot = prompt("Donnez moi un verbe du premier groupe : ");
  var racine = "";
  //on utilise le for pour parcourir le mot lettre par lettre comme un tableau
  //Puisqu'on veut retirer le "er", on va aller jusqu'à length-2 dans le parcours du mot
  for(var i = 0; i < mot.length-2 ; i++){
    //On adjoint à la racine la lettre actuelle du mot
    racine+=mot[i];
  }
  racine+="-";
  alert("Racine du verbe : "+racine);
}
