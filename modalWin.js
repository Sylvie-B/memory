export {ModWin};

let ModWin = function (bgWinCol, modWinCol){
    this.bgW = window.innerWidth;
    this.bgH = window.innerHeight;
    this.bgC = bgWinCol;
    this.modW = window.innerWidth / 2;
    this.modH = window.innerHeight / 2;
    this.modC = modWinCol;

    this.open = function (txt) {
        let newBgWin = document.createElement('div');
        newBgWin.style.width = this.bgW +  "px";
        newBgWin.style.height = this.bgH + "px";
        newBgWin.style.paddingTop = (this.bgH-this.modH)/2 + 'px';
        newBgWin.style.backgroundColor = this.bgC;
        newBgWin.style.position = 'absolute'
        newBgWin.style.top = '10px';
        newBgWin.style.left = '10px';
        document.body.appendChild(newBgWin);

        let newModWin = document.createElement('div');
        newModWin.style.width = this.modW + "px";
        newModWin.style.height = this.modH + "px";
        newModWin.style.margin = 'auto';
        newModWin.style.backgroundColor = this.modC;
        newModWin.style.border = '3px black double';
        newModWin.innerHTML = txt;
        newModWin.style.fontSize = '2em';
        newModWin.style.textAlign = 'center';
        newBgWin.appendChild(newModWin);

        newModWin.addEventListener('click', () => newBgWin.remove());
    }
}
