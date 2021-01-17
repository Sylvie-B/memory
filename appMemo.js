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

// tab max
let ref = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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


start.addEventListener('click', function () {

    // get choices
    let choiceT = document.getElementById('choiceT').value;
    let choiceN = document.getElementById('choiceN').value;

    // todo adapt decoration for theme choice
    Lord.decor('url("theme/lordOfRings/middleEarth.jpg")', 'game', 'newTitle');

    //  hidden choices screen
    let screen1 = document.getElementsByClassName('screen1');
    for (let item of screen1) {
        item.remove();
    }
    document.getElementById('choice').style.display = 'none';
    start.innerHTML = 'restart';
    start.id = 'switchRestart';


    // array choiceN
    let newRef = ref.splice(0, choiceN);
    let allRef = newRef.concat(newRef);
    console.log(allRef);

    for (let i = 0; i < allRef.length; i++) {
        let r = Math.floor(Math.random() * i);
        let stock = allRef[i];
        allRef[i] = allRef[r];
        allRef[r] = stock;
    }
    console.log(allRef);


    // allRef loop
    for (let i = 0; i < allRef.length; i++) {
        let frame = document.createElement('div');
        frame.style.position = 'relative';
        let verso = document.createElement('div');
        verso.className = 'verso';
        verso.style.position = 'absolute';
        verso.style.top = '0';
        verso.style.left = '0';
        verso.style.backgroundImage = "url('theme/lordOfRings/jrrT.png')";
        verso.style.backgroundSize = 'cover';
        let card = document.createElement('div');
        card.className = 'Mix'
        let face = document.createElement('img');

        // get pict in array
        face.src = cardsOfLord[allRef[i]];

        card.appendChild(face)
        frame.appendChild(card);
        card.appendChild(verso);
        theme.appendChild(frame);
    }

    // get cards
    let card = document.getElementsByClassName('Mix');
    console.log(card);
    let verso = document.getElementsByClassName('verso');
    console.log(verso);

    // two times
    let test = 0;
    for (let i = 0; i < card.length; i++) {
        verso[i].addEventListener('click', function () {

            switch (test) {
                case 0 :
                    verso[i].style.display = 'none';
                    ref = i;
                    test = 1;
                    console.log(test);
                    break;
                case 1 :
                    verso[i].style.display = 'none';
                    test = 0;
                    if(allRef[i] !== allRef[ref]){
                        setTimeout(function (){
                            verso[ref].style.display = 'unset';
                            verso[i].style.display = 'unset';
                        }, 500);
                    }
                    else {
                        console.log('trouvée !');

                    }

                    console.log(test);
                    console.log("case : " + allRef[i], "case : " + allRef[ref]);
                    break;
            }

        });

    }
})

// todo addEventListener(restart)
// document.getElementById("switchRestart").addEventListener('click', function (){
//
//     let screen2 = document.getElementsByTagName('div');
//
//     document.getElementById('choice').style.display = 'unset';
// });
