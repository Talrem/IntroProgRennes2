function sport(){
  var annee = prompt("Quel est votre année de naissance ?", "2000");
  //Comme nombre d'entre vous l'ont fait remarquer à la prof, ce n'est pas très précis d'utiliser 2024 dans le code
  //mais j'ai la flemme d'implémenter plus pour ce programme. J'ai plus fait joujou avec le format de date dans le fichier age.js
  var age = 2024-annee;
  //Ici, on fait juste des if(){}else{} pour vérifier que l'âge est le bon. Avec un mélange de OU logiques et de ET logiques
  if(age == 10 || age == 11){
    alert("Poussin");
  }else if(age == 12 || age == 13){
    alert("Benjamin");
  }else if(age == 14 || age == 15){
    alert("Minime");
  }else if(age == 16 || age == 17){
    alert("Cadet");
  }else if(age == 18 || age == 19){
    alert("Junior");
  }else if(age >= 20 && age <= 22){
    alert("Espoir");
  }else if(age >= 23 && age <= 39){
    alert("Senior");
  }else if(age >= 40){
    alert("Vétéran");
  }else{
    alert("Trop jeune pour faire du sport.");
  }
}
