import {Theme} from './modMem.js';

/** listen choices
 * change border color of chosen theme
 * change border color of chosen level
 *
 * adapt the title
 * create cards in #choice
 * create start button in #level
 *
 * when start
 * display :
 * nbr of cards
 * try
 * time
 * restart
 */

// get window
let gameBoard = document.getElementById('game');
gameBoard.style.height = window.innerHeight + 'px';

let theme = document.getElementById('theme');

// create theme lord    array of caracters + new theme + call
let cardsOfLord = [
    'theme/lordOfRings/aragorn.png',
    'theme/lordOfRings/boromir.png',
    'theme/lordOfRings/eye.png',
    'theme/lordOfRings/frodo.png',
    'theme/lordOfRings/gandalf.png',
    'theme/lordOfRings/gimli.png',
    'theme/lordOfRings/legolas.png',
    'theme/lordOfRings/pipinMerry.png',
    'theme/lordOfRings/ring.png',
    'theme/lordOfRings/sam.png'
];

let Lord = new Theme("Lord of memory");
Lord.setTheme("theme/lordOfRings/jrrT.png", 'Lord', 'theme');

// start
let start = document.getElementById('switchStart');


start.addEventListener('click', function (){
    // get choices
    let choiceT = document.getElementById('choiceT').value;
    console.log(choiceT);
    let choiceN = document.getElementById('choiceN').value;
    console.log(choiceN);

    // todo adapt decoration for theme choice
    Lord.decor('url("theme/lordOfRings/middleEarth.jpg")', 'game', 'newTitle');

    //  hidden choices screen
    let close = document.getElementsByClassName('screen1');
    for(let item of close){
        item.remove();
    }
    document.getElementById('choice').style.display = 'none';
    start.innerHTML = 'restart';
    start.id = 'switchRestart';
    // todo addEventListener(restart)



    // choiceN loop * 2
    for(let t = 0 ; t < 2 ; t++){
        for(let i = 0; i < choiceN ; i++){
            let frame = document.createElement('div');
            let card = document.createElement('div');
            card.className = 'toMix'
            let face = document.createElement('img');

            // get pict in array
            face.src = cardsOfLord[i]

            card.appendChild(face)
            frame.appendChild(card);
            theme.appendChild(frame);
        }
    }


})
