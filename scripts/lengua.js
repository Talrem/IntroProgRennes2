function lengua(){
  var langue = prompt("English or Spanish ?", "english");

  switch(langue.toLowerCase()){
    case "français":alert("Celui qui bouge en premier est gay");break;
    case "espanol":alert("El primero que se mueva es gay");break;
    case "english":alert("The frist one who moves is gay");break;
    case "zhongguo":alert("第一个行动的人是同性恋");break;
    case "nihongo":alert("最初に動くのはゲイだ");break;
    case "italiano":alert("Il primo che si muove è gay");break;
    default:alert("Why are you gay?");
  }
}
