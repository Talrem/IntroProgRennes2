function ouiOuNon(){
  var reponse = prompt("Voulez-vous faire un bonhomme de neige avec moi ? ");
  switch(reponse.toLowerCase()){
    case "oui": alert("Trop bien, enfile tes gants !");break;
    case "non": alert("Je vais aller ranger mes bottes au placard alors...");break;
    default:alert("Euh, est-ce que tu peux répondre par oui ou par non la prochaine fois que je te demande ?");
  }
}
