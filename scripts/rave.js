function rave(){
  var i,j;
  var c;
  var hexCode = "#";
  var buttonCollection = document.getElementsByClassName("scriptButton");
  //Background hexCode
  for(i=0; i<6;i++){
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
  //alert(hexCode);
  document.body.style.backgroundColor = hexCode;
  for(let button of buttonCollection){
    hexCode="#";
    for(i=0; i<6;i++){
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
    button.style.backgroundColor=hexCode;
  }
}
