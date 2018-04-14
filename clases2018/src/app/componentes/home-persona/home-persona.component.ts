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

    this.personas.push($event);
    console.log("personas recibidas : ",this.personas);
  }



  

}
