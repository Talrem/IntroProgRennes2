function msToTime(ms){
  var msIn1Year = 1000*3600*24*365.25;
  var years = ms/msIn1Year;
  return years;
}

function age(){
  var annee = prompt("Entrez votre année de naissance","2000");
  var mois = prompt("Entrez votre mois de naissance","2");
  var jour = prompt("Entrez votre jour de naissance","11");

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

  var date1 = new Date(annee,mois-1,jour);
  //alert(date2+"\n"+date1);
  var diff = Math.abs(new Date() - date1);
  alert(msToTime(diff).toFixed(2));
}
