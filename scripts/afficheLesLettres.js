function afficheLesLettres(){
  var mot = prompt("Donnez moi un mot : ");
  //on utilise le for pour parcourir le mot lettre par lettre comme un tableau
  for(var i = 0; i < mot.length ; i++){
    alert(mot[i]);
  }
}
