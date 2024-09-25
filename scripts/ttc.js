function ttc(){
  var pht = parseFloat(prompt("Entrez votre prix Hors Taxe", "0"));
  var number = parseFloat(prompt("Combien de produits prenez vous", "0"));

  /*La TVA est 20% du prix TTC, donc 100% - 20% = 80%
  pour passer de 80% à 100%, on multiplie par 1.25*/
  const tva = 1.25;

  var ttc = pht * tva * number;

  alert("Le prix TTC de vos produits est "+ttc.toFixed(2)+" €");
}
