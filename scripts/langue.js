function langue(){
  var prenom = prompt("Quel est votre prénom ?", "Jean");
  var langue = prompt("Quelle langue parlez vous ?", "français");
  if(langue!=null){
    switch(langue.toLowerCase()){
      case "français":alert("bonjour " + prenom);break;
      case "espagnol":alert("hola " + prenom);break;
      case "anglais":alert("hello " + prenom);break;
      case "mandarin":alert("你好 " + prenom);break;
      case "japonais":alert("こんにちは " + prenom);break;
      case "italien":alert("bongiorno " + prenom);break;
      default:alert("Je n'ai pas votre langue dans ma bdd. Désolé.");
    }
  }
}
