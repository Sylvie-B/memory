export {Theme};

let Theme = function (name, background, cardBack){
    // for exemple LordOfTheRing
    this.name = name;
    // middleEarthMap
    this.background = background;
    // jrrT.png
    this.cardBack = cardBack;


    // array of pictures
    this.cards = function (themeArray){
        return themeArray.concat(themeArray);
    }

}

