function conversion(){
  var montantEURO = parseFloat(prompt("Entrez le montant à convertir en euros", "0"));

  /*le taux de conversion de l'euro au dollar américain*/
  const taux = 1.113857;

  var montantUSD = montantEURO * taux;

  alert("Cela équivaut à "+montantUSD.toFixed(2)+" $");
}
