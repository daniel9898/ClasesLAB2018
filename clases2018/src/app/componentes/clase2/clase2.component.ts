import { Component, OnInit } from '@angular/core';
import { Persona } from '../../clases/persona';
import { EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-clase2',
  templateUrl: './clase2.component.html',
  styleUrls: ['./clase2.component.css']
})
export class Clase2Component {

   title = "TEXTO DESDE INPUT";

   palabras = [];
  
   constructor(){
     //this.persona = new Persona();
   }

   saludar($ev){
     this.title = $ev;
   }

   guardarPalabra($event){
    
     this.palabras.push($event);
     console.log("palabras : ",this.palabras);
   }

   /*guardar(){
       this.persona.guardar(); 
   }

   traer(){
     var persona = JSON.parse(localStorage.getItem("persona"));
     this.persona.nombre = persona.nombre;
     this.persona.apellido = persona.apellido;
     this.persona.mail = persona.mail;
     this.persona.check = persona.check;
   }*/

}
