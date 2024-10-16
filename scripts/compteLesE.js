function compteLesE(){
  var mot = prompt("Donnez moi un mot : ").toLowerCase();
  var nbE = 0;
  //on utilise le for pour parcourir le mot lettre par lettre comme un tableau
  for(var i = 0; i < mot.length ; i++){
    //On vérifie lettre par lettre si c'est un E, et si oui, on incrémente le compteur.
    if(mot[i] == "e") nbE++;
  }
  //lorsqu'on évalue une expression booléenne, toute valeur qui sera 0 est fausse. Tout ce qui n'est pas 0 est vrai. Donc si nbE n'a pas augmenté, il est toujours à 0, et donc on va aller dans le else.
  if(nbE){
    alert("Le mot entré contient : "+nbE+" « e »");
  }else{
    alert("Le mot entré ne contient aucune lettre « e »")
  }
}
/* ce while est exactement équivalent au for utilisé plus haut, mais il est plus approprié d'utiliser un for car le i++ pourrait être oublié et créer une boucle infinie
var i = 0;
while(i < mot.length){
  if(mot[i] == "e") nbE++;
  i++;
}
*/
