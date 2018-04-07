export class Persona {

	nombre : string;
    apellido : string;
    mail : string;
    check : boolean;

    constructor(){}

    guardar(){
        console.info("this : ",this);
        localStorage.setItem("persona",JSON.stringify(this));
    }
}
