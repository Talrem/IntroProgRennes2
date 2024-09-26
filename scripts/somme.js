function somme(){
  //parseFloat() indique que c'est un nombre à virgule flotante
  var n1 = parseFloat(prompt("Entrez votre premier nombre", "0"));
  var n2 = parseFloat(prompt("Entrez votre second nombre", "0"));

  //On peut faire une opération mathématique et l'affecter à une variable avec l'opérateur =
  var somme = n1 + n2;
  //Attention à ne pas confondre l'opérateur d'affectation "=" et l'opérateur de test d'identité "=="
  //Il existe aussi un opérateur "===", mais on en aura sûrement pas besoin. Mais dans les grandes lignes,
  //Prenons Le chiffre 16 et la chaîne de caractères "16".
  //Si vous faites 16 == "16", ça vous répondra que c'est vrai.
  //Cependant, 16 === "16" vous répondra que c'est faux, car même si les valeurs sont identiques, le format ne l'est pas. L'un étant un integer et l'autre un string
  alert("La somme de vos nombres est égale à "+somme);
}
