function lenSupA4(){
  var mot = prompt("Donnez un mot de plus de 4 caractères : ");
  //mot.length nous donne la longueur du mot.
  while(mot.length<=4){
    mot = prompt("Donnez un mot plus grand");
  }
}
