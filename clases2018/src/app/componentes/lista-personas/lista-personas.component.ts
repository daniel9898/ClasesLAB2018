import { Component } from '@angular/core';

import { Input } from '@angular/core';
import { Persona } from '../../clases/persona';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent {
  
  @Input() lista = Array<Persona>();

  constructor() { }
}
