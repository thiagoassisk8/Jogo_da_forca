import time,getpass,random

esportes = ['futebol','basquete','bola','chuteira','flamengo']
filmes = ['it a coisa','jogos mortais','sexta feira 13']
geral = ['futebol','basquete','bola','chuteira',
'flamengo','it a coisa','jogos mortais','sexta feira 13']
lista_erros = []


def player():
  player1 = input('Olá qual é o seu nome jogador? \n ')
  time.sleep(1)
  print('SEJA BEM VINDO {} que comecem os jogos!'.format(player1))
  print ('...\n')
  time.sleep(0.5)
player()


def main():
  guesses = 0
  ask = input('Escolha a categoria que você deseja jogar: \n\n'
  '1 - Esportes \n\n' 
  '2 - Filmes \n\n'
  '3 - Geral \n\n'
  '4 - SEJA O MESTRE\n')
  if ask == '1':
    word = random.choice(esportes)
    if word == 'futebol':
      print('Dica: É o esporte mais jogado do mundo')
    elif word == 'basquete':
      print('Dica: Michael Jordan ficou muito conhecido jogando... ')
    elif word == 'bola':
      print('Dica: É Redondo')
    elif word == 'chuteira':
      print('Dica: É de calçar')
    elif word == 'flamengo':
      print('Dica: Time com a maior torcida do Brasil')
    
  elif ask == '2':
    word = random.choice(filmes)
    if word == 'IT a coisa':
      print('Dica: É um filme de palhaço')
    elif word == 'jogos mortais':
      print('Dica: O personagem Jig saw ficou muito conhecido nesse filme! ')
    elif word == 'sexta feira 13':
      print('Dica: O personagem principal desse filme foi morto em um lago! ')
    elif word == 'chuteira':
      print('Dica: É de calçar')
    
  elif ask == '3':
    word = random.choice(geral)
    if word == 'futebol':
      print('Dica: É o esporte mais jogado do mundo')
    elif word == 'basquete':
      print('Dica: Michael Jordan ficou muito conhecido jogando... ')
    elif word == 'bola':
      print('Dica: É Redondo')
    elif word == 'chuteira':
      print('Dica: É de calçar')
    elif word == 'flamengo':
      print('Dica: Time com a maior torcida do Brasil')
    elif word == 'IT a coisa':
      print('Dica: É um filme de palhaço')
    elif word == 'jogos mortais':
      print('Dica: O personagem Jig saw ficou muito conhecido nesse filme! ')
    elif word == 'sexta feira 13':
      print('Dica: O personagem principal desse filme foi morto em um lago! ')
    elif word == 'chuteira':
      print('Dica: É de calçar')    
    
  elif ask == '4':
    word = getpass.getpass('Digite uma palavra secreta para seus amigos tentarem adivinhar \n')
   
  turns = 7
  guesses = ''

  while turns > 0:         
    failed = 0             
    for char in word:      
      if char in guesses:       
        print(char)    
      else:
        print ("_")     
        failed += 1

    if failed == 0:
      print('Parabéns!!')
      print('Você adivinhou a palavra {}'.format(word))
      break

    guess = input("Chute uma letra:") 
    guess = guess.lower()
    guesses += guess[0]
          
    if guess not in word:  
      turns -=1
      lista_erros.append(guess[0])
      print ("ERRADOO !!")
      print ('Voce tem mais {} palpites restantes \n'.format(turns))
      print('Letras já escolhidas: \n', lista_erros) 
    if turns == 0:           
      print ("PERDEUUUUUUUUUUUUUUUU")
      print('A palavra era {}'.format(word))
      
main()
