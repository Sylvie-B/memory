import {Theme} from './modMem.js';
// setting first screen
let choice = document.getElementById('choice');
choice.style.height = innerHeight * 0.7 + 'px';

// setting end game modal window
let modalWin = document.getElementById('modalWin');
modalWin.style.width = innerWidth + 'px';
modalWin.style.height = innerHeight + 'px';
modalWin.style.display = 'none';

let info = document.getElementById('info');
info.style.width = innerWidth/2 + 'px';
info.style.height = innerHeight/2 + 'px';

let end = document.getElementById('end');

// get window
let container = document.getElementById('container');
container.style.height = window.innerHeight + 'px';

let board = document.getElementById('board');
board.style.height = innerHeight * 0.9 + 'px';

// get start & restart buttton
let start = document.getElementById('start');
let restart = document.getElementById('restart');

/** THEME **/
// for next theme continue the array
// lord array of caracters img
let arrLord = [
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
let themeView = [
    'url("theme/lordOfRings/middleEarth.jpg")',
    'Lord',
    'theme/lordOfRings/jrrT.png',
    'url("theme/lordOfRings/oneRing.jpg")'
]

// mix function
let mix = function (array){
    for (let i = 0; i < array.length; i++) {
        let r = Math.floor(Math.random() * i);
        let stock = array[i];
        array[i] = array[r];
        array[r] = stock;
    }
}

/** CALL SELECT OBJECT **/

let Select = new Theme("Lord of memory", arrLord);

Select.setTheme(themeView[2], themeView[1], 'theme');

// create arrMax
let arr = Select.arrMax();

/** listen start button **/
start.addEventListener('click', function () {

    //check user choiceN value
    let choiceN = parseInt(document.getElementById('choiceN').value);

    if (choiceN > 1 && choiceN < 11) {

        // switch button
        start.style.display = 'none';
        restart.style.display = 'block';

        //  hidden choices screen
        document.getElementById('choice').style.display = 'none';
        // no hidden game screen
        board.style.display = 'flex';

        /** new screen **/

        Select.decor(themeView[0], 'container', 'newTitle');

        // random pictures order
        mix(arrLord);
        let newRef = arr.splice(0, choiceN);

        let dblArr = newRef.concat(newRef);
        // mix order of img
        mix(dblArr);

        // allRef loop to create cards
        for (let i = 0; i < dblArr.length; i++) {

            // div card for recto & verso
            let card = document.createElement('div');
            card.className = 'card';
            card.style.position = 'relative';

            // img width
            let refSize;

            if(innerWidth < 351){
                refSize = choiceN < 5 ? 26 : choiceN < 7 ? 24 : 18;
            }
            else if(innerWidth < 601){
                refSize = choiceN < 4 ? 28 : choiceN < 5 ? 26 : choiceN < 7 ? 22 : choiceN < 9 ? 19 : 17;
            }
            else{
                refSize = choiceN < 7 ? 14 : choiceN < 8 ? 11 : choiceN < 9 ? 10 : 9;
            }

            let recto = document.createElement('img');

            recto.style.width = refSize + 'vw';
            // get img in array
            recto.src = arrLord[dblArr[i]];

            /** adapt img width in function of choiceN **/

                // verso cards
            let verso = document.createElement('img');
            // size
            verso.style.width = refSize + 'vw';

            verso.src = themeView[2];
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
        let score = document.getElementById('score');
        let stock;
        let count = 0;
        let test = 0;
        for (let i = 0; i < verso.length; i++) {
            verso[i].addEventListener('mouseup', function () {
                // when click on verso
                if (test < 2) {
                    switch (test) {
                        case 0 :
                            verso[i].style.display = 'none';            // hidden verso
                            stock = i;                            // stock item value
                            test ++;
                            break;
                        case 1 :
                            verso[i].style.display = 'none';            // hidden verso
                            test --;
                            if(dblArr[i] !== dblArr[stock]){
                                setTimeout(function (){
                                    verso[stock].style.display = 'unset';
                                    verso[i].style.display = 'unset';
                                }, 500);
                            }
                            else {
                                ++count;
                                if(count === choiceN){
                                    // modal window
                                    modalWin.style.display = 'flex';
                                    info.style.backgroundImage = themeView[3];
                                    info.style.backgroundSize = 'cover';
                                    score.innerHTML = 'votre score est de ' + count * 2;
                                    end.addEventListener('click', function (){
                                        document.location.reload();
                                    })
                                }
                            }
                            break;
                    }
                }
            });
        }
    }
    else {
        alert('entrez un choix valide');
    }
})

restart.addEventListener("click",()=> document.location.reload());
