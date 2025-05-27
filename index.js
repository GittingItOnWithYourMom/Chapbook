const games = document.getElementsByClassName('games')
const ricktext = document.getElementById('ricktext')
const subway = document.getElementById('subway')
const darkmode = document.getElementById('darkmode')
const seizure = document.getElementById('seizure')
const rainbow = document.getElementById('rgb')
const body = document.body

let dark = sessionStorage.getItem("dark")
let rgb = sessionStorage.getItem("rgb")
let schizo = sessionStorage.getItem("schizo")
window.onload = function() {
    if (dark == 'on'){
        body.style.filter = 'invert(100%)'
        body.style.backgroundImage = 'url("/imgs/cube pattern2 - inverted.png")'
        if (window.location.pathname == '/index.html'){
            darkmode.checked = true
        }
    }
    if (rgb == 'on'){
        body.style.animation = '5s linear 0s infinite running rgb'
        if (window.location.pathname == '/index.html'){
            rainbow.checked = true
        }
    }
    if (schizo == 'on'){
        if (window.location.pathname == '/index.html'){
            seizure.checked = true
        }
    }
    // if (current_song){
    //     current_song.load()
    //     current_song.play()
    // }
}

function changemode(mode){
    if (mode == 'dark') {
        if(darkmode.checked){
            body.style.filter = 'invert(100%)'
            body.style.backgroundImage = 'url("/imgs/cube pattern2 - inverted.png")'
            sessionStorage.setItem("dark", 'on')
        }else{
            body.style.filter = 'invert(0%)'
            body.style.backgroundImage = 'url("/imgs/cube pattern2.png")'
            sessionStorage.setItem("dark", 'off')
        }
    }
    if (mode == 'rgb') {
        if(rainbow.checked){
            body.style.animation = '5s linear 0s infinite running rgb'
            sessionStorage.setItem("rgb", 'on')
        }else if(rainbow.checked == false){
            body.style.animation = 'none'
            sessionStorage.setItem("rgb", 'off')
        }
    }
    if (mode == 'seizure') {
        if(seizure.checked){
            body.style.animation = '0.1s linear 0s infinite running seizure'
            sessionStorage.setItem("schizo", 'on')
        }else if(seizure.checked == false){
            body.style.animation = 'none'
            sessionStorage.setItem("schizo", 'off')
        }
    }
}

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

// let current_song = sessionStorage.getItem("current_song")
function play_music(song, button){
  if (button.textContent == 'play'){
    song.load()
    song.play()
    // sessionStorage.setItem("current_song", song)
    button.textContent = 'stop'
  }if (button.textContent == 'Begin Accelerated Learning Experience') {
    song.load()
    song.play()
    subway.hidden = false
  }else{
    song.pause()
    // sessionStorage.setItem("current_song", false)
    button.textContent = 'play'
  }
}

function rick() {
    ricktext.textContent = '(rick is still in alpha development)'
    setTimeout(function() {
        ricktext.textContent = ''
    }, 2000)
}