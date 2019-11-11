import time,getpass,random

esportes = ['futebol','basquete','bola','chuteira','flamengo']
filmes = ['IT a coisa','jogos mortais','sexta feira 13']
geral = ['futebol','basquete','bola','chuteira',
'flamengo','IT a coisa','jogos mortais','sexta feira 13']
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
  print('1 - Esportes \n')
  print('2 - Filmes \n')
  print('3 - Geral \n')
  print('4 - SEJA O MESTRE \n')
  ask = input('Escolha a categoria que você deseja jogar? \n')
  if ask == '1':
    word = random.choice(esportes)
    if word == 'futebol':
      print('Dica: É o esporte mais jogado do mundo')
    if word == 'basquete':
      print('Dica: Michael Jordan ficou muito conhecido jogando... ')
    if word == 'bola':
      print('Dica: É Redondo')
    if word == 'chuteira':
      print('Dica: É de calçar')
    if word == 'flamengo':
      print('Dica: Time com a maior torcida do Brasil')
    
  elif ask == '2':
    word = random.choice(filmes)
    if word == 'IT a coisa':
      print('Dica: É um filme de palhaço')
    if word == 'jogos mortais':
      print('Dica: O personagem Jig saw ficou muito conhecido nesse filme! ')
    if word == 'sexta feira 13':
      print('Dica: O personagem principal desse filme foi morto em um lago! ')
    if word == 'chuteira':
      print('Dica: É de calçar')
    
  elif ask == '3':
    word = random.choice(geral)
    if word == 'futebol':
      print('Dica: É o esporte mais jogado do mundo')
    if word == 'basquete':
      print('Dica: Michael Jordan ficou muito conhecido jogando... ')
    if word == 'bola':
      print('Dica: É Redondo')
    if word == 'chuteira':
      print('Dica: É de calçar')
    if word == 'flamengo':
      print('Dica: Time com a maior torcida do Brasil')
    if word == 'IT a coisa':
      print('Dica: É um filme de palhaço')
    if word == 'jogos mortais':
      print('Dica: O personagem Jig saw ficou muito conhecido nesse filme! ')
    if word == 'sexta feira 13':
      print('Dica: O personagem principal desse filme foi morto em um lago! ')
    if word == 'chuteira':
      print('Dica: É de calçar')    
    
  elif ask == '4':
    word = getpass.getpass('Digite uma palavra secreta para seu amigo tentar adivinhar \n')
   
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
