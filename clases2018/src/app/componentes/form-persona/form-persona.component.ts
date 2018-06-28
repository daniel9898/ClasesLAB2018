import { Component} from '@angular/core';

import { EventEmitter, Output } from '@angular/core';
import { Persona } from '../../clases/persona';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.css']
})
export class FormPersonaComponent {

  person : any = {
    name : '',
    lastName: '',
    email:'',
    picture:''
  };
  
  submitted : boolean;
  
  //@Output() enviarPersona : EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    //this.persona = new Persona();
    this.submitted = false;
  }

  //get diagnostic() { return JSON.stringify(this.persona); }

  //onSubmit() { /*this.submitted = true;*/ }

  guardar(){
    //this.enviarPersona.emit(this.persona);
    console.log("persona enviada ",this.person);
  }

 

}
