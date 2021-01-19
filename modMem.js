export {Theme};

let Theme = function (title){

    // for exemple LordOfTheRing
    this.name = title;

    // set theme
    this.setTheme = function (verso, valueT, target){
        // create a card
        let card = document.createElement('div');
        card.className = 'screen1';
        card.style.display = "flex";

        // affect a back image
        let pict = document.createElement('img');
        pict.src = verso;

        // place in the screen
        let frame = document.getElementById(target);
        frame.appendChild(card);
        card.appendChild(pict);

        // add name on choice
        let choice = document.createElement('option');
        choice.value = valueT;
        choice.innerHTML = this.name;
        document.getElementById('choiceT').appendChild(choice);

    }

    this.decor = function (background, target, id){
        // change the title
        let newTitle = document.getElementById(id);
        newTitle.innerHTML = this.name;
        // change the background img
        let back = document.getElementById(target);
        back.style.backgroundImage = background;

    }

}

