function racineVerbale(){
  var mot = prompt("Donnez moi un verbe du premier groupe : ");
  var racine = "";
  //on utilise le for pour parcourir le mot lettre par lettre comme un tableau
  for(var i = 0; i < mot.length-2 ; i++){
    racine+=mot[i];
  }
  racine+="-";
  alert("Racine du verbe : "+racine);
}
