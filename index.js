var games = document.getElementsByClassName('games')

function start_game(game) {
   if (game == 1){
      window.open('/carnival game/index.html')
   }
   for (var i = 0; i < 5; i++) {
      games[i].remove()
   }
}