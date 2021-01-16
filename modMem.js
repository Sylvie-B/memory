export {Theme};

let Theme = function (name, cardBack){

    // for exemple LordOfTheRing
    this.name = name;

    // array of pictures
    this.cards = function (themeArray){
        return themeArray.concat(themeArray);
    }

    this.decor = function (background, color){
        // background img
        let back = document.getElementById('game');
        back.style.backgroundImage = background;
        // set of theme
        let frame = document.createElement('div');
        let img = document.createElement('img');
        img.scr = theme;
        let target = document.getElementById('choice');
        target.appendChild(frame);
        frame.appendChild(img);

    }

}

