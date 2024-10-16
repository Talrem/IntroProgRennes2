function compteARebours(){
  var minutes = parseInt(prompt("Entrez le nombre de minutes"));
  var secondes = parseInt(prompt("Entrez le nombre de secondes"));
  //tant que minute est supérieure à 0
  while(minutes){
    alert(minutes+" : "+secondes);
    //si il reste res secondes
    if(secondes){
      //on en enlève une
      secondes--;
    }else{
      //sinon, on passe à la minute suivante et on remet les secondes à 59
      minutes--;
      secondes = 59;
    }
  }
  //tant que seconde est supérieures ou égale à 0
  while(secondes>=0){
    //on décompte les secondes
    alert(secondes);
    secondes--;
  }
}
