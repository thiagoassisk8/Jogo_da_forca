let esportes = ["futebol","skate","basquete","natação"];
let youtubers = ["Felipe Neto","Lucas Lira", "Cocielo","Cauê Moura","PC Siqueira"];
let animais = ["Cachorro","Leão","Urso"];
let objetos = ["Mesa","celular","peruca"];
//let wrongletters = [];

//Soreteio da categoria/palavra secreta
let categorias = [esportes,youtubers,animais,objetos];
categoriaSorteada = categorias[Math.floor(Math.random() * categorias.length)];

secretword = categoriaSorteada[Math.floor(Math.random() * categoriaSorteada.length)];
//secretword = "";

function barrinha(){
  var quant = secretword.length;
  var barrinha = " _ ";
  var barrinhas = ({ toString: () => barrinha,repeat: String.prototype.repeat}).repeat(quant);//converte a qntd de letras em "_"
  document.getElementById("palavraSecreta").value=secretword
  document.getElementById("palavraSecreta").innerHTML=barrinhas  
}

function del_ltrs_digitds(){
  let wrongletters = document.getElementById("erradasletras");
  while (wrongletters.hasChildNodes()){
    wrongletters.removeChild(wrongletters.firstChild);
  }
  //barrinha();
}

//Menu principal
function funcao_esportes(){
  window.secretword = esportes[Math.floor(Math.random() * esportes.length)];
  barrinha()  
  document.getElementById("palavraSecreta").value=window.secretword;
  del_ltrs_digitds()
}

function funcao_youtubers(){
  window.secretword = youtubers[Math.floor(Math.random()*youtubers.length)]
  barrinha()
  document.getElementById("palavraSecreta").value=window.secretword;
  del_ltrs_digitds()
  return secretword;
  
}

function funcao_animais(){
  window.secretword = animais[Math.floor(Math.random()*animais.length)]
  barrinha()
  document.getElementById("bt_animais").value = secretword;
  del_ltrs_digitds()
  return secretword;
}
function funcao_objetos(){
  window.secretword = objetos[Math.floor(Math.random()*objetos.length)]
  barrinha()
  document.getElementById("bt_objetos").value = secretword; 
  del_ltrs_digitds()
  return secretword;
}

//Letra (input/usuário)
function funcao_letra(){
  //let letter = document.getElementById("letra").value;
  //console.log("funcionou", letter)
  //letter.addEventListener("Keyup",function(event){
    //if(event.Keycode == 13){
    //  event.preventDefault();
    //  document.getElementById("bt_ok").click();
    //}
  //});

}
  
function funcao_ok(){  
  let letter = document.getElementById("letra").value;
  let t = document.createTextNode(letter);
  let wrongletters = document.createElement("li");
  wrongletters.className = "NotIn"
  console.log(secretword);
  
  for(let i=0; i < secretword.length;i++ ){
    if(letter == secretword[i]){    
     console.log("posição letra",i);
     console.log("letra",secretword[i]);
     console.log(document.getElementById("palavraSecreta").value);
     document.getElementById("letter")
     
      
   }
   else if (letter != secretword[i]) {

    wrongletters.append(t);
    document.getElementById("erradasletras").appendChild(wrongletters);
      

     }
    //console.log("letra errada",letter);
    //console.log("valor de i:",secretword[i])
    else {
     
   }{              
     //wrongletter=document.createElement("NotIn")
     //document.getElementById("letrasErradas").appendChild(wrongletter);                          

    }    
  }
}

function funcao_restart(){
  
  console.log("restart");

}
//",,,
function funcao_dica(){
  if (secretword =="futebol"){
    
  }
  if(secretword == "skate"){

  }
  if(secretword =="basquete"){
    
  }
  if(secretword=="natação"){

  }

}
barrinha();
