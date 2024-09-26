function display(){
  //Vous occupez pas de ça, y'en a pas besoin.
  //C'est juste pour modifier le css avec un script, mais on a pas encore vu le css je crois
  var elem = document.getElementById("pasSerieux");
  if(elem.style.visibility=="visible"){
    elem.style.visibility="hidden";
  }else{
    elem.style.visibility="visible";
  }
}
