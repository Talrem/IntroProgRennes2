function supavingt(){
  var n = 0;
  var essais  = 0;
  //Cette partie là n'est pas obligatoire, je voulais juste implémenter un compteur qui juge l'utilisateur.
  var message = "merci, votre nombre est : ";
  //Vu que n à été initialisé à 0, on va forcément rentrer dans la boucle
  while(n <= 20){
    //Vu qu'on va modifier la valeur de n, on va pouvoir sortir de la boucle si la condition n'est plus respectée
    n = parseInt(prompt("Donnez-moi un nombre supérieur à 20"));
    essais++;
  }
  message +=n;
  //Une fois de plus, c'est juste pour juger l'utilisateur. Si il a mis plusieurs essais à me donner un nombre supérieur à 20, je le indique
  if(essais>1){
    message += ", ça vous a pris " + essais + " essais."
  }
  alert(message);
}
