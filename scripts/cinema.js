function cinema(){
  var age = parseFloat(prompt("Entrez votre âge", "24"));

  if(age<18){
    alert("Le prix TTC de votre billet est 7 €");
  }else{
    alert("Le prix TTC de votre billet est 9,60 €");
  }
}
