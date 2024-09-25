function sport(){
  var annee = prompt("Quel est votre année de naissance ?", "2000");
  var age = 2024-annee;

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
