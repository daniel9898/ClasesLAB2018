import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importo del module principal
import { RouterModule, Routes } from '@angular/router';

import { Clase2Component } from '../componentes/clase2/clase2.component';
import { TestMaterialComponent } from '../componentes/test-material/test-material.component';

// declaro donde quiero que se dirija
const MiRuteo = [
	
  {path: '' , component: Clase2Component},
	{path: 'clase2' , component: Clase2Component},
	{path: 'material' , component: TestMaterialComponent},


	/*{path: '' , 
	  children:
	     [{path: '', },
	      {path: '', },
	      {path: '', },
	      {path: '', },
	      {path: '', },
	      {path: '', }]
	},
	{path: '**' ,},
	{path: 'error' , }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo)
  ],
  exports: [
    RouterModule
  ]
})
export class RutasModule { }