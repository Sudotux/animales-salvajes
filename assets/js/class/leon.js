import { Animal } from './animal.js'

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    rugir(player) {
        player.innerHTML = `<source src="assets/sound/${this.getSonido()}" type="audio/mp3"></source>`;
        player.load();
        player.play();
    }
}

export { Leon };