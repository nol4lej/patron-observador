import { PlantillaPatronObservador } from "../plantilla/patron-observador.js";

class Famoso extends PlantillaPatronObservador{

    constructor(){
        super()
        this.texto = ""
        this.recibirTexto()
    }

    notificar(nuevoTexto){
        this.texto = nuevoTexto
        super.notificar(this.texto)
    }

    recibirTexto(){
        const textarea = document.getElementById("textarea-observable")
        textarea.addEventListener("input", (evento) =>{
            famosoObservable.notificar(evento.target.value)
        })
    }

}

const famosoObservable = new Famoso()