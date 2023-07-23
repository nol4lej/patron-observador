import { famosoObservable } from "../observables/famoso.js"

class Chismoso2{

    constructor(){
        this.texto = ""
        this.mostrarTexto()
    }

    notificar(notificacion){
        const container = document.getElementById("observador2")
        container.innerHTML = notificacion
        this.texto = notificacion
        if(notificacion.includes("salir")){
            famosoObservable.desuscribir(this)
        }
    }

    mostrarTexto(){
        const btn = document.getElementById("btn")
        btn.addEventListener("click", () => {
            console.log(chismoso2.texto)
        })
    }

}

const chismoso2 = new Chismoso2()
famosoObservable.suscribir(chismoso2)
