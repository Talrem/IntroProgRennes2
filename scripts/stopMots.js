function avgLen(arrayMots){
  var total = 0;
  for(var i = 0; i < arrayMots.length; i++){
    total += arrayMots[i].length;
  }
  return total/i;
}

function stopMots(){
  var count = 0;
  var arrayMots = [];
  var mot = "";
  while(count >= 0){
    mot = prompt("Entrez votre mot : ");
    if(mot.toLowerCase() == "stop"){
      count = -1;
    }else{
      arrayMots[count] = mot;
      count++;
    }
  }
  if(arrayMots.length > 1){
    alert("Vous avez entré "+arrayMots.length + "mots, et leur taille moyenne est de " + avgLen(arrayMots));
  }else{
    alert("Vous avez entré 1 mot, de taille "+arrayMots[0].length);
  }
}
