import { famosoObservable } from "../observables/famoso.js"

function chismosoUno(notificacion){
    const container = document.getElementById("observador1")
    container.innerHTML = notificacion
}

famosoObservable.suscribir(chismosoUno)