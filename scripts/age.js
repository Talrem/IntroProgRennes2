//Cette fonction prend en paramètre des millisecondes et renvoit l'équivalent en années
function msToYears(ms){
  var msIn1Year = 1000*3600*24*365.25;
  var years = ms/msIn1Year;
  return years;
}

function age(){
  //les variables peuvent être déclarées et attribuées en même temps.
  var annee = prompt("Entrez votre année de naissance","2000");
  var mois = prompt("Entrez votre mois de naissance","2");
  var jour = prompt("Entrez votre jour de naissance","11");

  //Cette partie prend en compte le fait que l'utilisateur peut taper son mois de naissance en lettres au lieu d'un nombre.
  //On retire les lettres accentuées et on met tout en minuscule avec un .toLowerCase() pour avoir à traiter le moins de cas possibles.
  switch(mois.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()){
    case "janvier":mois=1;break;
    case "fevrier":mois=2;break;
    case "mars":mois=3;break;
    case "avril":mois=4;break;
    case "mai":mois=5;break;
    case "juin":mois=6;break;
    case "juillet":mois=7;break;
    case "aout":mois=8;break;
    case "septembre":mois=9;break;
    case "octobre":mois=10;break;
    case "novembre":mois=11;break;
    case "decembre":mois=12;break;
  }
  //la fonction pour créer une date utilise des mois qui commencent à 0, il faut donc retirer 1 au mois.
  var date1 = new Date(annee,mois-1,jour);
  var diff = Math.abs(new Date() - date1);
  //.toFixed(2) limite le nombre de décimales qui seront affichées
  alert(msToYears(diff).toFixed(2));
}
