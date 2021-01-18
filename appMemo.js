import {Theme} from './modMem.js';

/** listen choices
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
let container = document.getElementById('container');
container.style.height = window.innerHeight + 'px';

let board = document.getElementById('board');

let display = document.getElementById('display');

let theme = document.getElementById('theme');

// tab max
let ref = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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

// start / restart
let start = document.getElementById('start');
let restart = document.getElementById('restart');

start.addEventListener('click', function () {
    board.style.display = 'flex';

    // switch button
    start.style.display = 'none';
    restart.style.display = 'block';

    // get choices
    let choiceT = document.getElementById('choiceT').value;
    let choiceN = document.getElementById('choiceN').value;

    // todo adapt decoration for theme choice
    Lord.decor('url("theme/lordOfRings/middleEarth.jpg")', 'container', 'newTitle');

    //  hidden choices screen
    document.getElementById('choice').style.display = 'none';

    // array choiceN
    let newRef = ref.splice(0, choiceN);
    let allRef = newRef.concat(newRef);

    for (let i = 0; i < allRef.length; i++) {
        let r = Math.floor(Math.random() * i);
        let stock = allRef[i];
        allRef[i] = allRef[r];
        allRef[r] = stock;
    }

    // allRef loop
    for (let i = 0; i < allRef.length; i++) {

        // container of cards recto / verso
        let frame = document.createElement('div');
        frame.style.position = 'relative';
        frame.className = 'tempo';

        // face cards
        let face = document.createElement('img');
        // get pict in array
        face.src = cardsOfLord[allRef[i]];


        // verso cards
        let card = document.createElement('div');
        card.className = 'Mix';
        let verso = document.createElement('div');
        verso.className = 'verso';
        verso.style.position = 'absolute';
        verso.style.top = '0';
        verso.style.left = '0';
        verso.style.backgroundImage = "url('theme/lordOfRings/jrrT.png')";
        verso.style.backgroundSize = 'cover';

        board.appendChild(frame);
        frame.appendChild(card);
        card.appendChild(face)
        card.appendChild(verso);

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
});

// todo addEventListener(restart)
restart.addEventListener('click', function (){
    // switch button
    start.style.display = 'block';
    restart.style.display = 'none';



    document.getElementById('choice').style.display = 'block';
    container.style.backgroundImage = 'none';
    board.style.display = 'none';
});
