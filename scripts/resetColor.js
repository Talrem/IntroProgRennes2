function resetColor(){
  //je récupère tous les boutons de ma page, et je met leur couleur en blanc. Ca permet d'annuler les bêtises que je fais avec la fonction Rave, qui change toutes les couleurs de la page
  var buttonCollection = document.getElementsByClassName("scriptButton");
  document.body.style.backgroundColor = "white";
  for(let button of buttonCollection){
    button.style.backgroundColor="white";
  }
}
