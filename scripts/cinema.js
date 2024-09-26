function cinema(){
  //parseFloat() permet d'indiquer que la valeur que l'on prend est un nombre à virgule flotante.
  var age = parseFloat(prompt("Entrez votre âge", "24"));
  //un programme est constitué d'instructions. Certaines de ces instructions sont des vérifications.
  //if() fait partie de ces vérifications. Un if() contient une "expression booléenne", c'est à dire un bout de code qui peut valoir soit vrai soit faux
  //En fonction du résultat, l'ordinateur va executer les instructions qui suivent.
  /*
    par exemple :
    if(expression booléenne) --ce code sera executé si c'est vrai--;
     C'est parce que le if() n'ammène que jusqu'au prochain ;
    //Cependant, on peut étendre les instructions que le if() va executer avec {}
    if(expression booléenne){
      --ce code sera executé si c'est vrai--;
      --ce code sera executé si c'est vrai--;
      --ce code sera executé si c'est vrai--;
    }
    --ce code sera executé même si c'est faux--;
    Je recommende d'utiliser {} même si on a qu'une seule ligne à executer
  */
  if(age<18){
    alert("Le prix TTC de votre billet est 7 €");
  }else{
    //le else va executer le code uniquement si la condition est fausse.
    alert("Le prix TTC de votre billet est 9,60 €");
  }
}
