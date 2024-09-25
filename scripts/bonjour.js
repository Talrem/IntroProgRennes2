function bonjour(){
  var sexe = prompt("Entrez votre sexe, f ou m", "m");

  if(sexe.toLowerCase() == "f"){
    alert("Bonjour madame.");
  }else if(sexe.toLowerCase() == "m"){
    alert("Bonjour monsieur.");
  }else{
    alert("bonjour être humain.");
  }
}
