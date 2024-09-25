function supavingt(){
  var n = 0;
  var essais  = 0;
  var message = "merci";
  while(n <= 20){
    n = parseInt(prompt("Donnez-moi un nombre supérieur à 20"));
    essais++;
  }
  if(essais>1){
    message += ", ça vous a pris " + essais + " essais."
  }
  alert(message);
}
