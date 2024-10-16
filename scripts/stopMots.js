function avgLen(arrayMots){
  //fait la moyenne des longueurs des mots fournis dans un tableau
  var total = 0;
  //pour chacun des mots
  for(var i = 0; i < arrayMots.length; i++){
    //je vais ajouter sa longueur à mon total
    total += arrayMots[i].length;
  }
  //la moyenne étant le total divisé par le nombre d'éléments
  return total/i;
}

function stopMots(){
  var count = 0;
  //je créé un tableau dans lequel je vais stocker mes mots pour pouvoir les utiliser tous d'un coup.
  var arrayMots = [];
  var mot = "";
  while(count >= 0){
    mot = prompt("Entrez votre mot : ");
    if(mot.toLowerCase() == "stop"){
      //si jamais le mot est "stop", j'indique à ma boucle de s'arrêter
      count = -1;
    }else{
      //si le mot n'est pas stop, j'ajoute le mot à mon tableau et j'augmente mon compteur pour passer à la case suivante.
      arrayMots[count] = mot;
      count++;
    }
  }
  if(arrayMots.length > 1){
    //si j'ai plus d'un mot, la grammaire et les calculs sont différents.
    alert("Vous avez entré "+arrayMots.length + "mots, et leur taille moyenne est de " + avgLen(arrayMots));
  }else{
    //sinon, un seul mot et pas de calculs.
    alert("Vous avez entré 1 mot, de taille "+arrayMots[0].length);
  }
}
