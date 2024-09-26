function rave(){
  //Une fois de plus, i est un compteur ici
  var i;
  //Ici, c va me permettre de gérer l'intensité du sous pixel
  var c;
  //La manière dont sont gérées les couleurs dans un ordinateur :
  //L'écran est composé de pixels, chacun de ses pixels est composé de 3 sous pixels. Rouge, Vert et Bleu, RVG (ou RGB en anglais)
  //Cette association permet de récréer un bon nombre de couleurs (plus de 16.000.000) et la manière dont chaque pixel est géré est avec de l'Hexadécimal (base 16)
  //Une expression Hexadécimale commence par un #, et est suivie de 6 "chiffres". de 0 pour le plus faible à F pour le plus fort.
  //On a donc,                          #------
  //Avec cette répartition de couleurs  #RRVVBB
  //Les valeurs que l'on va trouver à chaque endroit vont donner l'intensité d'éclairage de chaque sous-pixel.
  var hexCode = "#";
  //Vu qu'on a 6 caractères à mettre derrière le # en Hexadécimal, il faut faire une boucle six fois
  for(i=0; i<6;i++){
    //Je récupère un chiffre entre 0 et 15
    c = Math.floor((Math.random()*16));
    //si jamais le nombre que je récupère ne tient pas en base 10, il faut que je le convertisse à sa valeur en base 16.
    switch(c){
      case 15:
        //Je fais une concaténation de mon code Hexadécimal avec l'intensité aléatoire
        hexCode += "F";
        break;
      case 14:
        hexCode += "E";
        break;
      case 13:
        hexCode += "D";
        break;
      case 12:
        hexCode += "C";
        break;
      case 11:
        hexCode += "B";
        break;
      case 10:
        hexCode += "A";
        break;
      default:
        //Si le nombre tient en base 10, pas besoin de le convertir
        hexCode += c;
        break;
    }
  }
  //Ici, je modifie le CSS pour remplacer la couleur de fond par celle que j'ai générée aléatoirement
  document.body.style.backgroundColor = hexCode;
  //Ca me permet de récupérer chaque élément qui a la classe "scriptButton"
  var buttonCollection = document.getElementsByClassName("scriptButton");
  //Cette partie me permet de prendre pour chaque élément de mon groupe de boutons, et d'effectuer les actions du for pour chaque bouton
  for(let button of buttonCollection){
    hexCode="#";
    for(i=0; i<6;i++){
      //je fais la même chose que pour le fond de l'écran
      c = Math.floor((Math.random()*16));
      switch(c){
        case 15:
          hexCode += "F";
          break;
        case 14:
          hexCode += "E";
          break;
        case 13:
          hexCode += "D";
          break;
        case 12:
          hexCode += "C";
          break;
        case 11:
          hexCode += "B";
          break;
        case 10:
          hexCode += "A";
          break;
        default:
          hexCode += c;
          break;
      }
    }
    //sauf que cette fois, je change la couleur de chaque bouton individuellement
    button.style.backgroundColor=hexCode;
  }
}
