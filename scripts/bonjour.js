function bonjour(){
  //Les variables peuvent être déclarées et attribuées en même temps
  var sexe = prompt("Entrez votre sexe, f ou m", "m");
  //On utilise .toLowerCase() pour convertir notre chaîne de caractères (string) en minuscule pour traiter le moins de cas possibles.
  if(sexe.toLowerCase() == "f"){
    alert("Bonjour madame.");
    //Ici, après avoir vérifié que l'utilisateur n'était pas une femme, on vérifie si c'est un homme
  }else if(sexe.toLowerCase() == "m"){
    alert("Bonjour monsieur.");
  }else{
    //Si l'utilisateur n'est ni une femme, ni on homme, on arrive ici
    alert("bonjour être humain.");
  }
}
