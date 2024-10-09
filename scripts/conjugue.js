function conjugue(){
  /*
  La structure do{Insctructions}while(Test) fonctionne de manière similaire au While
  Cependant, on va effectuer les instructions de la boucle au moins une fois, et on vérifie seulement à la fin si on doit continuer.
  */
  do{
    var mot = prompt("Donnez moi un verbe du premier groupe : ");
    var racine = "";
    //on utilise le for pour parcourir le mot lettre par lettre comme un tableau. Pour retirer la terminaison, on ignore les deux derniers caractères
    for(var i = 0; i < mot.length-2 ; i++){
      racine+=mot[i];
    }
    //puis pour compléter la racine, on rajoute un tiret
    switch(parseInt(prompt("A quelle personne voulez-vous le conjuguer ? 1, 2 ou 3"))){
      case 1:
        switch(prompt("Singulier ou pluriel ? tapez \"s\" ou \"p\"").toLowerCase()){
          case "s": alert(racine + "e");break;
          case "p": alert(racine + "ons");break;
        }
      break;
      case 2:
        switch(prompt("Singulier ou pluriel ? tapez \"s\" ou \"p\"").toLowerCase()){
          case "s": alert(racine + "es");break;
          case "p": alert(racine + "ez");break;
        }
      break;
      case 3:
        switch(prompt("Singulier ou pluriel ? tapez \"s\" ou \"p\"").toLowerCase()){
          case "s": alert(racine + "e");break;
          case "p": alert(racine + "ent");break;
        }
      break;
      default:return alert("Erreur, arrêt du programme");
    }
  }while(prompt("Voulez vous entrer un autre verbe ? tapez \"o\" ou \"n\"").toLowerCase() == "o");
  //je vérifie que l'utilisateur m'a dit qu'il voulait continuer à entrer des verbes. Si ce n'est pas oui, c'est non, donc je sors de la boucle.
}
