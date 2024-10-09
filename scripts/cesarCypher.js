function getAlphaNumber(a){
  switch(a){
    case "a":return 0;
    case "b":return 1;
    case "c":return 2;
    case "d":return 3;
    case "e":return 4;
    case "f":return 5;
    case "g":return 6;
    case "h":return 7;
    case "i":return 8;
    case "j":return 9;
    case "k":return 10;
    case "l":return 11;
    case "m":return 12;
    case "n":return 13;
    case "o":return 14;
    case "p":return 15;
    case "q":return 16;
    case "r":return 17;
    case "s":return 18;
    case "t":return 19;
    case "u":return 20;
    case "v":return 21;
    case "w":return 22;
    case "x":return 23;
    case "y":return 24;
    case "z":return 25;
    default: return -1; // si le charactère n'est pas reconnu, on renvoit le code de l'espace. Le traitement se fait dans l'autre fonction
  }
}

function cesarCypher(){
  var message = prompt("Quel est votre message ? ").toLowerCase();
  var messageCode = "";
  var key = parseInt(prompt("Quelle est votre clé de déplacement ? "));
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var cNumber = 0;
  for(i = 0; i < message.length; i++){
    if(getAlphaNumber(message[i])!=-1){
      cNumber = getAlphaNumber(message[i]) + key;
      //On sort du tableau par en dessous.
      if(cNumber < 0){
        //Donc on doit remonter
        cNumber += 26;
      }
      messageCode += alphabet[(cNumber%26)]; //l'opérateur % (modulo) permet d'avoir le reste d'une division euclidienne.
    }else{
      //Le charactère n'a pas été reconnu, donc on remet le même.
      messageCode += message[i];
    }
  }
  alert(messageCode);
}
