import { getAnimales } from './animales.js';
import { Aguila } from './class/aguila.js';
import { Leon } from './class/leon.js';
import { Lobo } from './class/lobo.js';
import { Oso } from './class/oso.js';
import { Serpiente } from './class/serpiente.js';

let selectedAnimal = document.getElementById('animal'); //animal seleccionado del selector
let edad = document.getElementById('edad');
let comentarios = document.getElementById('comentarios');
let preview = document.getElementById('preview');
let btnRegistrar = document.getElementById('btnRegistrar');
let tablaAnimales = document.getElementById('Animales');
let player = document.getElementById('player');
let foundAnimal; //animal encontrado del array animales; relacionado con selectedAnimal
let animales = []; //animales que se obtienen del json
let animalesRegistrados = [];
let myModal = new bootstrap.Modal(document.getElementById('exampleModal'), { keyboard: false });

//verifica que todas las casillas se completan
let esValido = (animal, edad, comentarios) => {
    if (animal && edad != 0 && comentarios) {
        return true;
    }
    alert('Todas las casillas son obligatorias.');
    return false;
};

//agrega objeto animal al array animalesResgistrados
let agregarAnimal = (nombre, edad, imagen, comentarios, sonido) => {
    switch (nombre) {
        case ('Aguila'):
            animalesRegistrados.push(new Aguila(nombre, edad, imagen, comentarios, sonido));
            break;
        case ('Leon'):
            animalesRegistrados.push(new Leon(nombre, edad, imagen, comentarios, sonido));
            break;
        case ('Lobo'):
            animalesRegistrados.push(new Lobo(nombre, edad, imagen, comentarios, sonido));
            break;
        case ('Oso'):
            animalesRegistrados.push(new Oso(nombre, edad, imagen, comentarios, sonido));
            break;
        case ('Serpiente'):
            animalesRegistrados.push(new Serpiente(nombre, edad, imagen, comentarios, sonido));
            break;
    }
};

//implementa el mostrar animal en modal al hacer click sobre su imagen
let mostrarEnModal = () => {
    let imgs = document.getElementsByName('imgsModal');
    imgs.forEach((image, index) => {
        image.addEventListener('click', () => {
            let template = `<div class="card border-0">
                                <img src="assets/img/${animalesRegistrados[index].img}" class="card-img-top" alt="${animalesRegistrados[index].img}">
                                <div class="card-body bg-dark text-light text-center">  
                                    <p class="card-text">${animalesRegistrados[index].edad}</p>
                                    <p class="card-text">Comentarios</p>
                                    <p class="card-text">${animalesRegistrados[index].comentarios}</p>
                                </div>
                            </div>`;
            document.querySelector('.modal-body').innerHTML = template;
            myModal.show();
        });
    });
};

//implementa el reproducir el sonido del animal al hacer click sobre su icono
let agregarSonido = () => {
    let bsSonido = document.getElementsByName('bsSonido');
    bsSonido.forEach((boton, index) => {
        boton.addEventListener('click', () => {
            switch (animalesRegistrados[index].nombre) {
                case ('Aguila'):
                    animalesRegistrados[index].chillar(player);
                    break;
                case ('Leon'):
                    animalesRegistrados[index].rugir(player);
                    break;
                case ('Lobo'):
                    animalesRegistrados[index].aullar(player);
                    break;
                case ('Oso'):
                    animalesRegistrados[index].grunir(player);
                    break;
                case ('Serpiente'):
                    animalesRegistrados[index].sisear(player);
                    break;
            }
        });
    });
};

//muestra los animales registrados en el panel de la izquierda
let imprimirAnimalesRegistrados = (animalesRegistrados) => {
    let template = '';
    animalesRegistrados.forEach(animal => {
        template += `<div class="card border-0 m-3" style="width: 12rem;">
                        <img src="assets/img/${animal.img}" name="imgsModal" class="card-img-top" alt="${animal.img}">
                        <div class="bg-secondary">
                            <button name="bsSonido" class="btn btn-secondary m-1">
                                <img src="assets/img/audio.svg" height="30px" alt="audio.svg">
                            </button>
                        </div>
                    </div>`;
    });
    tablaAnimales.innerHTML = template;
    mostrarEnModal();
    agregarSonido();
};

//resetea formulario
let resetFormulario = () => {
    selectedAnimal.selectedIndex = 0;
    edad.selectedIndex = 0;
    comentarios.value = "";
    preview.style.backgroundImage = 'url(assets/img/lion.svg)';
};

//carga imagen del animal antes de registrar
selectedAnimal.addEventListener('change', () => {
    foundAnimal = animales.find(animal => animal.name == selectedAnimal.value);
    let previewBgImg = `assets/img/${foundAnimal.imagen}`;
    preview.style.backgroundImage = `url(${previewBgImg})`;
});

//implementa escucha al boton 'Agregar'
btnRegistrar.addEventListener('click', () => {
    if (esValido(foundAnimal, edad.selectedIndex, comentarios.value)) {
        agregarAnimal(foundAnimal.name, edad.value, foundAnimal.imagen, comentarios.value, foundAnimal.sonido);
        imprimirAnimalesRegistrados(animalesRegistrados);
        resetFormulario();
    }
});

//iife que obtiene la lista de animales del json y lo asigna al array animales
(async () => {
    try {
        const data = await getAnimales();
        animales = data;
    } catch (error) {
        console.log('Error: ', error);
    }
})();