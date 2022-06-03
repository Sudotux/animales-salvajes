class Animal {

    constructor(nombre, edad, img, comentarios, sonido) {
        let _nombre = nombre;
        let _edad = edad;
        let _img = img;
        let _comentarios = comentarios;
        let _sonido = sonido;

        this.getNombre = () => _nombre;
        this.setNombre = (nombre) => _nombre = nombre;

        this.getEdad = () => _edad;
        this.setEdad = (edad) => _edad = edad;

        this.getImg = () => _img;
        this.setImg = (img) => _img = img;

        this.getComentarios = () => _comentarios;
        this.setComentarios = (comentarios) => _comentarios = comentarios;

        this.getSonido = () => _sonido;
        this.setSonido = (sonido) => _sonido = sonido;
    }

    get nombre() {
        return this.getNombre();
    }
    set nombre(name) {
        this.setNombre(name);
    }

    get edad() {
        return this.getEdad();
    }
    set edad(age) {
        this.setEdad(age);
    }

    get img() {
        return this.getImg();
    }
    set img(image) {
        this.setImg(image);
    }

    get comentarios() {
        return this.getComentarios();
    }
    set comentarios(comments) {
        this.setComentarios(comments);
    }

    get sonido() {
        return this.getSonido();
    }
    set sonido(sound) {
        this.setSonido(sound);
    }

    //agregado (no pedido en desafio)
    getData() {
        return {
            nombre: this.getNombre(),
            edad: this.getEdad(),
            img: this.getImg(),
            comentarios: this.getComentarios(),
            sonido: this.getSonido()
        };
    }

}

export { Animal };