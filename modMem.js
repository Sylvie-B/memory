export {Theme};

let Theme = function (title){

    // for exemple LordOfTheRing
    this.name = title;

    // set theme
    this.setTheme = function (verso, valueT, target){
        let card = document.createElement('div');
        card.className = 'screen1';
        card.style.display = "flex";
        let pict = document.createElement('img');
        pict.src = verso;
        let frame = document.getElementById(target);
        frame.appendChild(card);
        card.appendChild(pict);

        let choice = document.createElement('option');
        choice.value = valueT;
        choice.innerHTML = this.name;
        document.getElementById('choiceT').appendChild(choice);
    }

    this.decor = function (background, target, id){
        let newTitle = document.getElementById(id);
        newTitle.innerHTML = this.name;
        // background img
        let back = document.getElementById(target);
        back.style.backgroundImage = background;

    }

}

