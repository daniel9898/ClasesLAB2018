import { Component } from '@angular/core';

import { Persona } from '../../clases/persona';

@Component({
  selector: 'app-home-persona',
  templateUrl: './home-persona.component.html',
  styleUrls: ['./home-persona.component.css']
})
export class HomePersonaComponent {

  personas = Array<Persona>();

  constructor(){}

  guardarPersona($event){

    let persona = new Persona();
    persona.nombre = $event.nombre;
    persona.apellido = $event.apellido;
    persona.mail = $event.mail;
    
    this.personas.push(persona);

    console.log("personas recibidas : ",this.personas);
  }



  

}
