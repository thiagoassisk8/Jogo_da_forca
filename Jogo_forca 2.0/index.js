let letras_disponiveis  = ["a","b","c","d","e","f","g",
"h","i","j","k","l","m","n","o","p","q","r","s","t","u",
"v","w","x","y","z","ç","ã","é"];

let esportes = ["futebol","skate","basquete","natação"];
let youtubers = ["Felipe Neto","Lucas Lira", "Cocielo","Cauê Moura","PC Siqueira"];
let animais = ["Cachorro","Leão","Urso"];
let objetos = ["Mesa","celular","peruca"];


//Menu principal
function funcao_esportes(){
  let secretword = esportes[Math.floor(Math.random() * esportes.length)];
  let quant = secretword.length;//define a quantidade de letras da palavra secreta
  let barrinhas = ({ toString: () => " _ ",repeat: String.prototype.repeat}).repeat(quant);//converte a qntd de letras em "_"
  document.getElementById("palavraSecreta").innerHTML=barrinhas;
  document.getElementById("palavraSecreta").value=secretword;
  //barrinhas =   
  //return secretword
}

function funcao_youtubers(){
  let secretword = youtubers[Math.floor(Math.random()*youtubers.length)]
  let quant = secretword.length;
  let barrinhas = ({ toString: () => " _ ",repeat: String.prototype.repeat}).repeat(quant);
  document.getElementById("palavraSecreta").innerHTML=barrinhas;
  document.getElementById("bt_ytbers").value=secretword;
  return secretword;
  
}

function funcao_animais(){
  let secretword = animais[Math.floor(Math.random()*animais.length)]
  let quant = secretword.length;
  let barrinhas = ({ toString: () => " _ ",repeat: String.prototype.repeat}).repeat(quant);
  document.getElementById("palavraSecreta").innerHTML=barrinhas;
  document.getElementById("bt_animais").value = secretword;
  return secretword;
}
function funcao_objetos(){
  let secretword = objetos[Math.floor(Math.random()*objetos.length)]
  let quant = secretword.length;
  let barrinhas = ({ toString: () => ' _ ', repeat: String.prototype.repeat }).repeat(quant);
  document.getElementById("bt_objetos").value = secretword;
  document.getElementById("palavraSecreta").innerHTML = barrinhas;
  return secretword;
}

//Letra (input/usuário)
function funcao_letra(){
   document.getElementById("letra").value;  
  
    
}
  
  function funcao_ok(){
    let letter = funcao_letra();
    //alert(letter)
    secretword = document.getElementById("palavraSecreta").value;
    console.log(secretword,"Letra digitada:",letter);
    return letter
    
  
}  
function funcao_restart(){
  console.log("restart");

}

function funcao_dica(){
  

}
