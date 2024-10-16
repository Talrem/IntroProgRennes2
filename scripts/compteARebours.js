function compteARebours(){
  var minutes = parseInt(prompt("Entrez le nombre de minutes"));
  var secondes = parseInt(prompt("Entrez le nombre de secondes"));
  while(minutes || secondes){
    alert(minutes+" : "+secondes);
    if(secondes){
      secondes--;
    }else{
      minutes--;
      secondes = 59;
    }
  }
  alert("0 : 0");
}
