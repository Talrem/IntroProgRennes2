function sommeFor(){
  var n=0;
  var i;
  for(i = 0; i<10;i++){
    n+=parseInt(prompt("Entrez votre nombre : "));
  }
  alert("La somme de vos nombres est égale à "+n+". Et leur moyenne est égale à "+n/i+".");
}
