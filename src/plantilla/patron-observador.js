export class PlantillaPatronObservador{

    constructor(){
        this.observadores = []
    }

    suscribir(observador){
        this.observadores.push(observador)
    }

    desuscribir(suscriptor){
        this.observadores = this.observadores.filter(observador => observador !== suscriptor)
    }

    notificar(evento){
        this.observadores.forEach(observador => {
            observador(evento)
        })
    }
    
}