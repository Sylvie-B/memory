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

let carOfLord = [1, 2, 3];

let Lord = new Theme("Lord", "middleEarth", "jrrT.png");

// Lord.cards(carOfLord);
console.log(Lord.cards(carOfLord));

//
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
//
