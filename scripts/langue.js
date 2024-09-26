function langue(){
  //Lorsque l'on utilise la fonction prompt(), celle-ci peut prendre deux arguments (qui sont séparés par des virgules)
  //le premier argument est la question qui est posée à l'utilisateur, et le second est la réponse par défaut, que l'utilisateur doit modifier (ou non)
  var prenom = prompt("Quel est votre prénom ?", "Jean");
  var langue = prompt("Quelle langue parlez vous ?", "français");
  if(langue!=null){
    //la structure switch(){} est également une vérification. Elle prend le contenu entre parenthèses et vient le comparer à chaque case.
    //Si le case correspond, le switch() va executer les instructions jusqu'à la fin du switch, ou jusqu'à rencontrer l'instruction break;
    //Si aucun cas n'a été executé, il est intéressant de mettre un default.
    /*
    Cette structure est équivalente à de nombreux if(){}else if(){}
    if(langue.toLowerCase()=="français"){
      alert("bonjour "+prenom);
    }else if(langue.toLowerCase()=="espagnol"){
      alert("hola " + prenom)
    }else if(langue.toLowerCase()=="anglais"){
      alert("hello " + prenom)
    }else if(langue.toLowerCase()=="mandarin"){
      alert("你好 " + prenom)
    }else if(langue.toLowerCase()=="japonais"){
      alert("こんにちは " + prenom)
    }else if(langue.toLowerCase()=="italien"){
      alert("bongiorno " + prenom)
    }else{
      alert("Je n'ai pas votre langue dans ma bdd. Désolé.");
    }
    */
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
