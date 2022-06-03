import { Animal } from './animal.js'

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    sisear(player) {
        player.innerHTML = `<source src="assets/sound/${this.getSonido()}" type="audio/mp3"></source>`;
        player.load();
        player.play();
    }
}

export { Serpiente };