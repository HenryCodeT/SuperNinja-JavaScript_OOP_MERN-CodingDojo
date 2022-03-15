class Ninja{
    /**
     * 
     * @param {String} nombre 
     */
    constructor(nombre){
        this.nombre = nombre;
        this.salud = 0;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName(){
        console.log("********* Nombre **********");
        console.log(this.nombre);
    }
    showStats(){
        console.log("********** Stats *********");
        console.log("Nombre: ",this.nombre);
        console.log("Fuerza: ",this.fuerza);
        console.log("velocidad: ",this.velocidad);
        console.log("salud: ",this.salud);
    }
    drinkSake(){
        console.log("********** Drinking Sake ********");
        this.salud += 10;
        console.log("Salud: ",this.salud);

    }
    
}

class Sensei extends Ninja{
    constructor(nombre){
        super(nombre);
        super.salud = 200;
        super.velocidad = 10;
        super.fuerza = 10;
        
        this.nombre=nombre;
        this.sabiduria = 10;

    }
    speakWisdom(){
        console.log("***************** SpeakWisdom ***************");
        return console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.drinkSake();
superSensei.showStats();    
