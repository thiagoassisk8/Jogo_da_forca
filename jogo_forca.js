(function () {
  "use strict";
  let availableLetters,geral, guessInput, 
  guess, guessButton, lettersGuessed, lettersMatched,
  output, man, letters, lives, currentWord, numLettersMatched, messages;

  function setup() {
      availableLetters = "abcdefghijklmnopqrstuvwxyzç";
      lives = 7;
      //esportes = ['futebol','basquete','bola','chuteira','flamengo'];
      //filme = ['Titanic','avatar','click'];
      geral = ['futebol','basquete','bola','chuteira','flamengo','Titanic','avatar','click'];
      messages = {
          win: 'You win!',
          lose: 'Game over!',
          guessed: ' você já tentou, tenta outra letra...',
          validLetter: 'Faça seu palpite!'
      };
      //letras_usadas = [];

      lettersGuessed = lettersMatched = '';
      numLettersMatched = 0;

      currentWord = geral[Math.floor(Math.random() * geral.length)];

      output = document.getElementById("output");
      man = document.getElementById("man");
      guessInput = document.getElementById("letter");

      man.innerHTML = 'Você tem ' + lives + ' vidas sobrando';
      output.innerHTML = '';

      document.getElementById("letter").value = '';

      guessButton = document.getElementById("guess");
      guessInput.style.display = 'inline';
      guessButton.style.display = 'inline';

      letters = document.getElementById("letters");
      letters.innerHTML = '<li class="current-word">Current word:</li>';

      let letter, i;
      for (i = 0; i < currentWord.length; i++) {
          letter = '<li class="letter letter' + currentWord.charAt(i).toUpperCase() + '">' + currentWord.charAt(i).toUpperCase() + '</li>';
          letters.insertAdjacentHTML('beforeend', letter);
      }
  }

  function gameOver(win) {
      if (win) {
          output.innerHTML = messages.win;
          output.classList.add('win');
      } else {
          output.innerHTML = messages.lose;
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
      if (availableLetters.indexOf(guess) > -1) {
        if ((lettersMatched && lettersMatched.indexOf(guess) > -1) || (lettersGuessed && lettersGuessed.indexOf(guess) > -1)) {
            output.innerHTML = '"' + guess.toUpperCase() + '"' + messages.guessed;
            output.classList.add("warning");
        }
        else if (currentWord.indexOf(guess) > -1) {
            let lettersToShow;
            lettersToShow = document.querySelectorAll(".letter" + guess.toUpperCase());
            for (let i = 0; i < lettersToShow.length; i++) {
              lettersToShow[i].classList.add("correct");
            }
            for (let j = 0; j < currentWord.length; j++) {
              if (currentWord.charAt(j) === guess) {
                numLettersMatched += 1;
                }
            }
            lettersMatched += guess;
            if (numLettersMatched === currentWord.length) {
              gameOver(true);
            }
        }
        else {
          lettersGuessed += guess;
          lives--;
          man.innerHTML = 'Você tem agora só mais ' + lives + ' vidas sobrando';
          if (lives == 0) gameOver();
        }
      }
      else {
        output.classList.add('error');
        output.innerHTML = messages.validLetter;
      }
    }
    else {
      output.classList.add('error');
      output.innerHTML = messages.validLetter;
    }
    return false;
  };
}());