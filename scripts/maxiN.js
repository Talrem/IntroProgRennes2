function maxiN(){
  var n = parseInt(prompt("De combien de nombres voulez-vous faire la comparaison ?"));
  var arrayN = [n];
  for(var i = 0; i < n;i++){
    arrayN[i] = parseInt(prompt("Entrez un nombre ("+(n-i)+"nombres restants)"));
  }
  console.log(arrayN);
  alert(arrayN.reduce((a, b) => Math.max(a, b), -Infinity));
}
