import { Component, OnInit } from '@angular/core';
import { Persona } from '../../clases/persona';


@Component({
  selector: 'app-clase2',
  templateUrl: './clase2.component.html',
  styleUrls: ['./clase2.component.css']
})
export class Clase2Component {

   persona : Persona;
  
   constructor(){
     this.persona = new Persona();
   }

   guardar(){
       this.persona.guardar(); 
   }

   traer(){
     var persona = JSON.parse(localStorage.getItem("persona"));
     this.persona.nombre = persona.nombre;
     this.persona.apellido = persona.apellido;
     this.persona.mail = persona.mail;
     this.persona.check = persona.check;
   }

}
