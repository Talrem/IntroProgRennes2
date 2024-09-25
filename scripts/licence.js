function licence(){
  var etude = prompt("Faites-vous une licence ou un master ?","Master");
  if(etude.toLowerCase() != "master" && etude.toLowerCase()!="licence") return alert("Ce cursus n'est pas pris en charge.");
  var moyenneS1 = parseFloat(prompt("Quelle moyenne au semestre 1 ?", "10"));
  var moyenneS2 = parseFloat(prompt("Et au semestre 2 ?", "10"));

  switch(etude.toLowerCase()){
    case "licence":
      if( ((moyenneS1+moyenneS2)/2) >= 10){
        alert("ADMIS");
      }else if( ((moyenneS1+moyenneS2)/2) < 10 && (moyenneS1>10 || moyenneS2>10) ){
        alert("AJAC");
      }else if( ((moyenneS1+moyenneS2)/2) < 10 && (moyenneS1<10 && moyenneS2<10) ){
        alert("AJOURNÉ");
      }else{
        alert("Il y a eu une erreur.");
      }
      break;
    case "master":
      if(moyenneS1 >= 10 && moyenneS2 >= 10){
        alert("ADMIS");
      }else{
        alert("AJOURNÉ")
      }
      break;
  }
}
