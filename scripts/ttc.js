function ttc(){
  var pht = parseFloat(prompt("Entrez votre prix Hors Taxe", "0"));
  var number = parseFloat(prompt("Combien de produits prenez vous", "0"));

  /*La TVA est 20% du prix TTC, donc 100% - 20% = 80%
  pour passer de 80% à 100%, on multiplie par 1.25*/
  const tva = 1.25;

  var ttc = pht * tva * number;
  //La fonction .toFixed(X) fonctionne en modifiant ce qui précède le ".", c'est également le cas des fonctions telles que .toLowerCase() ou .toUpperCase()
  //rien n'empêche d'enchaîner ce genre de fonctions les unes à la suite des autres. Les instructions seront faites en séquence. 
  alert("Le prix TTC de vos produits est "+ttc.toFixed(2)+" €");
}
