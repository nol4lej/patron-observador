import { PlantillaPatronObservador } from "../plantilla/patron-observador.js";

class Famoso extends PlantillaPatronObservador{

    constructor(){
        super()
        this.texto = ""
    }

    notificar(nuevoTexto){
        this.texto = nuevoTexto
        super.notificar(this.texto)
    }

}

const famosoObservable = new Famoso()

famosoObservable.notificar("esto es una notificacion")
console.log(famosoObservable)