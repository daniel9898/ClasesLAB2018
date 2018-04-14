import { Component, OnInit } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lista-clase3',
  templateUrl: './lista-clase3.component.html',
  styleUrls: ['./lista-clase3.component.css']
})
export class ListaClase3Component implements OnInit {

 @Input() lista = []; 

  constructor() { }

  ngOnInit() {
  }


}
