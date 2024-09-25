function resetColor(){
  var buttonCollection = document.getElementsByClassName("scriptButton");
  document.body.style.backgroundColor = "white";
  for(let button of buttonCollection){
    button.style.backgroundColor="white";
  }
}
