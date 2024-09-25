function password(){
  var password = prompt("Définissez votre mot de passe : ");
  while(password!=prompt("Saisissez votre mot de passe : ")){
    alert("Le mot de passe que vous avez saisi est incorrect.");
  }
  alert("Mot de passe correct.");
}
