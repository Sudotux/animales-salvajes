import { Animal } from './animal.js'

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    //se implemento con parametro player para no tener que invocar al document.getElementById cada vez
    //y dejar, ademas, todo en index.js; ie, por comodidad
    chillar(player) {
        player.innerHTML = `<source src="assets/sound/${this.getSonido()}" type="audio/mp3"></source>`;
        player.load();
        player.play();
    }
}

export { Aguila };