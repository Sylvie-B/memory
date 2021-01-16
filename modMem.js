export {Theme};

let Theme = function (name){

    // for exemple LordOfTheRing
    this.name = name;

    // array of pictures
    this.cards = function (themeArray){
        return themeArray.concat(themeArray);
    }

    // set theme
    this.setTheme = function (verso){
        let frame = document.createElement('div');
        frame.style.display = "flex";
        let pict = document.createElement('img');
        pict.src = verso;
        let target = document.getElementById('theme');
        target.appendChild(frame);
        frame.appendChild(pict);
    }

    this.decor = function (background){
        // background img
        let back = document.getElementById('game');
        back.style.backgroundImage = background;

    }

}

