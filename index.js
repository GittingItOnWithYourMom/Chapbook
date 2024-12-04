var games = document.getElementsByClassName('games')

function start_game(game) {
    for (var i = 0; i < games.length; i++) {
        games[i].remove()
    }
    if (1 == 1){
        window.open('carnival game/index.html')
    }
}