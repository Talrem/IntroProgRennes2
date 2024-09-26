function licence(){
  var etude = prompt("Faites-vous une licence ou un master ?","Master");
  if(etude.toLowerCase() != "master" && etude.toLowerCase()!="licence") return alert("Ce cursus n'est pas pris en charge.");
  var moyenneS1 = parseFloat(prompt("Quelle moyenne au semestre 1 ?", "10"));
  var moyenneS2 = parseFloat(prompt("Et au semestre 2 ?", "10"));

  //Les différentes structures peuvent être imbriquées, ici, on a un switch pour vérifier le niveau d'étude, et des if pour vérifier les moyennes
  switch(etude.toLowerCase()){
    case "licence":
      //le if() peut contenir beaucoup de choses, notamment des expressions mathématiques, des comparaisons...
      if( ((moyenneS1+moyenneS2)/2) >= 10){
        alert("ADMIS");
        //Et ils peuvent également contenir plusieurs expressions qui doivent être évaluées
        //En utilisant le && (ET logique) et le || (OU logique), on peut arriver à des expressions très complexes
        //pour les évaluer, l'ordinateur va utiliser une table de vérité. 0 = faux, 1 = vrai. a et b des variables, et R le résultat de l'équation booléenne
        /*
               ET logique      OU logique
              a 1  1  0  0    a 1  1  0  0
              b 1  0  1  0    b 1  0  1  0
              R 1  0  0  0    R 1  1  1  0
        */
      }else if( ((moyenneS1+moyenneS2)/2) < 10 && (moyenneS1>10 || moyenneS2>10) ){
        //On peut utiliser des parenthèses pour délimiter les expressions afin de ne pas se perdre. Par exemple, les parenthèses de l'expression au dessus indique que :
        //La moyenne des deux semestres doit être supérieure à 10 ET ( la moyenneS1 OU la moyenneS2 doivent être supérieures à 10)
        alert("AJAC");
      }else if( ((moyenneS1+moyenneS2)/2) < 10 && (moyenneS1<10 && moyenneS2<10) ){
        //Ici, puisque les 3 conditions doivent être remplies en même temps, on pourrait se passer des parenthèses et juste avec if(a && b && c), au lieu de if(a && (b && c))
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
