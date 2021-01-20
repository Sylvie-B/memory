import {Theme} from './modMem.js';
import {ModWin} from "./modalWin";
let endGame = new ModWin('rgb(255 177 0 / 50%)', 'white');
/**
 * try
 * time
 * restart
 */

// tab max
let ref = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// get window
let container = document.getElementById('container');
container.style.height = window.innerHeight + 'px';

let board = document.getElementById('board');

// get start buttton
let start = document.getElementById('start');

/** THEME **/
// for next theme continue the array
// lord array of caracters img
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

// background - back card - valueT
let lordView = [
    'url("theme/lordOfRings/middleEarth.jpg")',
    'Lord',
    "theme/lordOfRings/jrrT.png"
]

/** CALL SELECT OBJECT **/
// switch
// case lord
// case hp
let Select = new Theme("Lord of memory");

Select.setTheme(lordView[2], lordView[1], 'theme');

/** listen start button **/
start.addEventListener('click', function () {

    //check user choiceN value
    let choiceN = document.getElementById('choiceN').value;

    if (choiceN > 1 && choiceN < 11) {
        // todo timer
        // switch button
        start.style.display = 'none';
        restart.style.display = 'block';
        //  hidden choices screen
        document.getElementById('choice').style.display = 'none';

        /** new screen **/

        // todo get choices adapt view
        // let choiceT = document.getElementById('choiceT').value;
        // todo adapt decoration for theme choice

        Select.decor(lordView, 'container', 'newTitle');

        // array choiceN --> object methode ?
        // todo mix newRef before splice
        let newRef = ref.splice(0, choiceN);
        let allRef = newRef.concat(newRef);
        // mix order of img
        for (let i = 0; i < allRef.length; i++) {
            let r = Math.floor(Math.random() * i);
            let stock = allRef[i];
            allRef[i] = allRef[r];
            allRef[r] = stock;
        }

        // allRef loop to create cards
        for (let i = 0; i < allRef.length; i++) {

            // div card for recto & verso
            let card = document.createElement('div');
            card.className = 'card';
            card.style.position = 'relative';

            let recto = document.createElement('img');
            // get img in array
            recto.src = cardsOfLord[allRef[i]];

            /** adapt img width in function of choiceN **/

                // verso cards
            let verso = document.createElement('img');
            verso.src = lordView[2];
            verso.className = 'verso';
            verso.style.position = 'absolute';
            verso.style.top = '0';
            verso.style.left = '0';

            // div card in board
            board.appendChild(card);
            // img recto & verso in card
            card.appendChild(recto)
            card.appendChild(verso);

        }
        /**  listen cards   **/
        // get cards
        let verso = document.getElementsByClassName('verso');
        let cards = document.getElementsByClassName('card');
        // todo change verso class ?
        let score = 0;
        let test = 0;
        for (let i = 0; i < cards.length; i++) {
            verso[i].addEventListener('click', function () {
                // when click on verso
                if (test < 2) {

                    switch (test) {
                        case 0 :
                            verso[i].style.display = 'none';            // hidden verso
                            ref = i;                            // stock item value
                            test ++;
                            break;
                        case 1 :
                            verso[i].style.display = 'none';            // hidden verso
                            test --;
                            if(allRef[i] !== allRef[ref]){
                                setTimeout(function (){
                                    verso[ref].style.display = 'unset';
                                    verso[i].style.display = 'unset';
                                }, 500);
                            }
                            else {
                                console.log('trouvé');
                                score++;
                                if(score === parseInt(choiceN)){
                                    // modal window

                                }
                            }
                            break;
                    }
                }
                // sinon
            });
        }
    }
    else {
        alert('entrez un choix valide');
    }
})

// todo addEventListener(restart)

let restart = document.getElementById('restart');
