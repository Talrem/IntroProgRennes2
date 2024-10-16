function maxiN(){
  var n = parseInt(prompt("De combien de nombres voulez-vous faire la comparaison ?"));
  var arrayN = [n];
  //après avoir demandé combien de nombres on veut
  for(var i = 0; i < n;i++){
    //on demande ce nombre là.
    arrayN[i] = parseInt(prompt("Entrez un nombre ("+(n-i)+"nombres restants)"));
  }
  //on va récupérer le plus grand entre a, b et -Infinity pour tout le tableau, retirant petit à petit les éléments les moins grands.
  alert(arrayN.reduce((a, b) => Math.max(a, b), -Infinity));
}
