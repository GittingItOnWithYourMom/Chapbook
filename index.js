var games = document.getElementsByClassName('games')
var ricktext = document.getElementById('ricktext')

function start_game(game) {
  if (game == 1){
    window.open('/web5/carnival game/index.html')
  }
  if (game == 2){
    window.open('/web5/universe escape/index.html')
  }
  if (game == 3){
    window.open('/web5/inside out/index.html')
  }
  if (game == 4){
    window.open('/web5/paradox escape/index.html')
  }
}

function rick() {
    ricktext.textContent = '(rick is still in alpha development)'
    setTimeout(function() {
        ricktext.textContent = ''
    }, 2000)
}