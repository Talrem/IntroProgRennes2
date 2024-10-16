function initialesSplit(){
  var identite = prompt("entrez votre nom et prénom : ").toUpperCase();
  //Tout en majuscule car les initiales seront en majuscule à la fin.
  var initiales = identite.split(" ");
  //indentite.split(" ") me créé un tableau qui contient tous les mots séparés par des espaces.
  alert(initiales[0][0]+"."+initiales[1][0]);
  //J'accède à chacun de ces mots avec initiales[X], où X est l'identifant du mot (commençant par 0).
  //puis pour chacun de ces mots, j'adjoins [0] pour ne prendre que le premier caractère de ces mots.
}

function initiales(){
  //Tout en majuscule car les initiales seront en majuscule à la fin.
  var identite = prompt("entrez votre nom et prénom : ").toUpperCase();
  //indexOf(" ") me donne la position du premier espace.
  var pos = identite.indexOf(" ");
  //la première lettre de l'identité sera la première initiale.
  //la lettre à la position de l'espace + 1 sera la deuxième.
  alert(identite[0]+"."+identite[pos + 1]);
}
