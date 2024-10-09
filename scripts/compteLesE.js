function compteLesE(){
  var mot = prompt("Donnez moi un mot : ").toLowerCase();
  var nbE = 0;
  //on utilise le for pour parcourir le mot lettre par lettre comme un tableau
  for(var i = 0; i < mot.length ; i++){
    //On vérifie lettre par lettre si c'est un E, et si oui, on incrémente le compteur.
    if(mot[i] == "e") nbE++;
  }
  if(nbE){
    alert("Le mot entré contient : "+nbE+" « e »");
  }else{
    alert("Le mot entré ne contient aucune lettre « e »")
  }
}
