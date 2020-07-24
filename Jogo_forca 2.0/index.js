var esportes = ["FUTEBOL","SKATE","BASQUETE","NATAÇÃO"];
var youtubers = ["FELIPE NETO","LUCAS LIRA", "COCIELO","CAUE MOURA","PC SIQUEIRA"];
var animais = ["CACHORRO","LEÃO","URSO"];
var objetos = ["MESA","CELULAR","PERUCA"];
//var wrongletters = [];

//Soreteio da categoria/palavra secreta
var categorias = [esportes,youtubers,animais,objetos];
categoriaSorteada = categorias[Math.floor(Math.random() * categorias.length)];

secretword = categoriaSorteada[Math.floor(Math.random() * categoriaSorteada.length)];
//secretword = "";

function barrinha(){
  for(x= 0; x < secretword.length; x++){
    var letracerta = secretword[x];
    var ul = document.getElementById("palavraSecreta");
    var li = document.createElement("li");
    li.className = "In"
    li.appendChild(document.createTextNode("_"));
    li.setAttribute('data-letter',letracerta);
    ul.append(li)
    
  }

}

function del_ltrs_digitds(){
  var wrongletters = document.getElementById("erradasletras");
  while (wrongletters.hasChildNodes()){
    wrongletters.removeChild(wrongletters.firstChild);
  }
  var palavra_escondida = document.getElementById("palavraSecreta");
  while(palavra_escondida.hasChildNodes()){
    palavra_escondida.removeChild(palavra_escondida.firstChild)
  }
  barrinha();
}

//Menu principal
function funcao_esportes(){
  secretword = esportes[Math.floor(Math.random() * esportes.length)];
  barrinha()  
  del_ltrs_digitds()
}

function funcao_youtubers(){
  secretword = youtubers[Math.floor(Math.random()*youtubers.length)]
  barrinha()
  del_ltrs_digitds()
  return secretword;
  
}

function funcao_animais(){
  secretword = animais[Math.floor(Math.random()*animais.length)]
  barrinha()
  del_ltrs_digitds()
  return secretword;
}
function funcao_objetos(){
  secretword = objetos[Math.floor(Math.random()*objetos.length)]
  barrinha()
  document.getElementById("bt_objetos").value = secretword; 
  del_ltrs_digitds()
  return secretword;
}

//Letra (input/usuário)
function funcao_letra(){
  
}
function victoria(){
  if(document.getElementsByClassName("In").innerHTML =!"_"){
    

  }

}
  
function funcao_ok(){  
  //barrinha()
  var letter_input = document.getElementById("letra").value.toUpperCase();
  var t = document.createTextNode(letter_input);
  var wrongletters = document.createElement("li");
  wrongletters.className = "NotIn"
  console.log(secretword);

  

  var secretword = document.getElementsByClassName("In");
  for(var i=0; i < secretword.length;i++ ){
    //console.log(i);
    var secretletter = document.getElementsByClassName("In")[i].getAttributeNode("data-letter").value
    if(letter_input === secretletter){
      console.log("letra secreta",secretletter);
      var enderecoLetra = document.getElementsByClassName("In")[i];
      enderecoLetra.innerHTML=secretletter;
      
     
    }
   
   else if(letter_input !=secretletter) {
    wrongletters.append(t);
    document.getElementById("erradasletras").appendChild(wrongletters);
      

     }
    else{
      //victoria()
      
    }
    //console.log("letra errada",letter);
    //console.log("valor de i:",secretword[i])
     //wrongletter=document.createElement("NotIn")
     //document.getElementById("letrasErradas").appendChild(wrongletter);                          

        
  }
}

function funcao_restart(){
  barrinha()
  del_ltrs_digitds()
  console.log("restart");

}

function funcao_dica(){
var enderecoDica = document.getElementById("dica")
  if (secretword =="FUTEBOL"){
    enderecoDica.style.display = "inline"; 
    enderecoDica.innerHTML ="Esporte mais Jogado do mundo"
  }
  if(secretword == "SKATE"){
    enderecoDica.style.display = "inline"; 
    enderecoDica.innerHTML ="É o esporte favorito do cara que programou esse jogo sauhsauh";
  }
  if(secretword =="BASQUETE"){
    enderecoDica.style.display = "inline"; 
    enderecoDica.innerHTML ="Esse esporte foi inventado em 1981";
  }
  if(secretword=="NATAÇÃO"){
    enderecoDica.style.display = "inline"; 
    enderecoDica.innerHTML ="O objetivo do esporte é determinar qual é o nadador mais rápido em uma determinada distância";
  }

}
barrinha();