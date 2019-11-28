//fonte:https://stackoverflow.com/questions/44229476/replacing-underscores-with-letters-of-corresponding-word-in-hangman-game-in-java
(function () {
  "use strict";

  let letras_disponiveis  = "abcdefghijklmnopqrstuvwxyzçãé";
  let  geral = ['futebol','basquete','bola','chuteira','flamengo','Titanic','avatar','click'];
  let esportes = ['futebol','basquete','bola','chuteira','flamengo'];
  let filmes   = ['Titanic','avatar','click'];
  let vidas    = 7;
  let mensagens = {
    win: 'Você Venceu!',
    lose: 'Fim de Jogo!',
    guessed: ' você já tentou, tenta outra letra...',
    validLetter: 'Faça seu palpite!'
  };

  let output          = document.getElementById("output");
  let man             = document.getElementById("man");
  let guessInput      = document.getElementById("letter");
  let buttonEsportes  = document.getElementById("categoria");
  let buttonFilmes    = document.getElementById("categoria2");
  let buttonGeral     = document.getElementById("categoria3");
  let mestreInput    = document.getElementById("mestre");
  let guessButton     = document.getElementById("guess");
  let letters         = document.getElementById("letters");
  let buttonMestre     = document.getElementById("confirmacao");

  let palavraUsuario, categoria, guess, lettersGuessed, lettersMatched, palavraSecreta, numLettersMatched;

  function setup() {
      
      lettersGuessed    = lettersMatched = '';
      numLettersMatched = 0;
         
      
      buttonEsportes.onclick = function () {
        categoria         = esportes;
        palavraSecreta    = categoria[Math.floor(Math.random() * categoria.length)];
        lettersGuessed    = lettersMatched = '';
        numLettersMatched = 0;
        //console.log(categoria)
        return escolheCategoria(palavraSecreta)
      };

      buttonMestre.onclick = function () {
      palavraSecreta    = mestreInput.value;
      categoria         = esportes;
      lettersGuessed    = lettersMatched = '';
      numLettersMatched = 0;
        //console.log(categoria)
        return escolheCategoria(palavraSecreta)
      };
      
      buttonFilmes.onclick = function () {
        categoria         = filmes;
        palavraSecreta    = categoria[Math.floor(Math.random() * categoria.length)]; 
        lettersGuessed    = lettersMatched = '';
        numLettersMatched = 0;
        console.log(categoria)
        return escolheCategoria(palavraSecreta)
      };

      buttonGeral.onclick = function () {
        categoria         = geral;
        palavraSecreta    = categoria[Math.floor(Math.random() * categoria.length)];
        lettersGuessed    = lettersMatched = '';
        numLettersMatched = 0;
        console.log(categoria)
        return escolheCategoria(palavraSecreta)
      };
      
      function escolheCategoria(palavraSecreta) {
        
        man.innerHTML     = 'Você tem ' + vidas + ' vidas sobrando';
        output.innerHTML  = '';
  
        document.getElementById("letter").value = '';
        
        guessInput.style.display  = 'inline';
        guessButton.style.display = 'inline';
        
        letters.innerHTML = '<li class="current-word">Palavra Secreta:</li>';
        
        let letter, i;
        for (i = 0; i < palavraSecreta.length; i++) {
          letter = '<li class="letter letter' + palavraSecreta.charAt(i).toUpperCase() + '">' + palavraSecreta.charAt(i).toUpperCase() + '</li>';
          letters.insertAdjacentHTML('beforeend', letter);
        }
      }

      categoria=geral;
      palavraSecreta  = categoria[Math.floor(Math.random() * categoria.length)];
  
      man.innerHTML     = 'Você tem ' + vidas + ' vidas sobrando';
      output.innerHTML  = '';
  
      document.getElementById("letter").value = '';
      
      guessInput.style.display = 'inline';
      guessButton.style.display = 'inline';

      letters = document.getElementById("letters");
      letters.innerHTML = '<li class="current-word">Palavra Secreta:</li>';

      let letter, i;
      for (i = 0; i < palavraSecreta.length; i++) {
        letter = '<li class="letter letter' + palavraSecreta.charAt(i).toUpperCase() + '">' + palavraSecreta.charAt(i).toUpperCase() + '</li>';
        letters.insertAdjacentHTML('beforeend', letter);
      }
  }

  function gameOver(win) {
      if (win) {
          output.innerHTML = mensagens.win;
          output.classList.add('win');
      } else {
          output.innerHTML = mensagens.lose;
          output.classList.add('error');
      }

      guessInput.style.display = guessButton.style.display = 'none';
      guessInput.value = '';
  }

  window.onload = setup();

  document.getElementById("restart").onclick = setup;

  guessInput.onclick = function () {
      this.value = '';
  };

  document.getElementById('hangman').onsubmit = function (e) {
    if (e.preventDefault) e.preventDefault();
    output.innerHTML = '';
    output.classList.remove('error', 'warning');
    guess = guessInput.value;
    if (guess) {
      if (letras_disponiveis.indexOf(guess) > -1) {
        if ((lettersMatched && lettersMatched.indexOf(guess) > -1) || (lettersGuessed && lettersGuessed.indexOf(guess) > -1)) {
            output.innerHTML = '"' + guess.toUpperCase() + '"' + mensagens.guessed;
            output.classList.add("warning");
        }
        else if (palavraSecreta.indexOf(guess) > -1) {
            let lettersToShow;
            lettersToShow = document.querySelectorAll(".letter" + guess.toUpperCase());
            for (let i = 0; i < lettersToShow.length; i++) {
              lettersToShow[i].classList.add("correct");
            }
            for (let j = 0; j < palavraSecreta.length; j++) {
              if (palavraSecreta.charAt(j) === guess) {
                numLettersMatched += 1;
                }
            }
            lettersMatched += guess;
            if (numLettersMatched === palavraSecreta.length) {
              gameOver(true);
            }
        }
        else {
          lettersGuessed += guess;
          vidas--;
          man.innerHTML = 'Você tem agora só mais ' + vidas + ' vidas sobrando';
          if (vidas == 0) gameOver();
        }
      }
      else {
        output.classList.add('error');
        output.innerHTML = mensagens.validLetter;
      }
    }
    else {
      output.classList.add('error');
      output.innerHTML = mensagens.validLetter;
    }
    return false;
  };
}());
