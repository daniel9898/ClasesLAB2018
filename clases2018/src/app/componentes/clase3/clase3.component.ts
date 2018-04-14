import { Component, OnInit } from '@angular/core';

import { EventEmitter, Input, Output } from '@angular/core';
import { Persona } from '../../clases/persona';

@Component({
  selector: 'app-clase3',
  templateUrl: './clase3.component.html',
  styleUrls: ['./clase3.component.css']
})
export class Clase3Component implements OnInit {

  //@Input() dato: any;
  palabra : string;

  @Output() enviarPalabra : EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  guardar(){

    this.enviarPalabra.emit(this.palabra);
     console.log(this.palabra);
  }

  ngOnInit() {
  }

}
