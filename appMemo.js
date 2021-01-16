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
Lord.setTheme("theme/lordOfRings/jrrT.png");

// if user choice Lord

// Lord.cards(cardsOfLord);
// console.log(Lord.cards(cardsOfLord)[0]);
// Lord.decor("url('theme/lordOfRings/middleEarth.jpg')", "theme/lordOfRings/jrrT.png");




// let frame = document.getElementById("theme").getElementsByTagName("div");
//
// for(let i = 0; i < frame.length; i++){
//     let pict = document.createElement('img');
//     pict.src = 'theme/jrrT.png';
//     pict.style.width = '90%';
//
//     frame[i].appendChild(pict);
//     frame[i].style.display = 'flex';
//     frame[i].style.justifyContent = 'center';
//     frame[i].style.alignItems = 'center';
//
// }

