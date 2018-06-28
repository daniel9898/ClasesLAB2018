import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importo del module principal
import { RouterModule, Routes } from '@angular/router';

import { TestMaterialComponent } from '../componentes/test-material/test-material.component';
import { HomePersonaComponent } from '../componentes/home-persona/home-persona.component';
import { FormPersonaComponent } from '../componentes/form-persona/form-persona.component';
import { ListaPersonasComponent } from '../componentes/lista-personas/lista-personas.component';
import { NgUploadComponent } from '../componentes/ng-upload/ng-upload.component';


// declaro donde quiero que se dirija
const MiRuteo = [
	
  {path: '' , component: HomePersonaComponent},
  {path: 'material' , component: TestMaterialComponent},
  {path: 'uploadfile' , component: NgUploadComponent},
 
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