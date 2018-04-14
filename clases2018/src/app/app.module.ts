import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { RutasModule } from './rutas/rutas.module';
import { Clase2Component } from './componentes/clase2/clase2.component';
import { TestMaterialComponent } from './componentes/test-material/test-material.component';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';//test
import { 
          MatButtonModule,
          MatMenuModule,
          MatToolbarModule,
          MatIconModule,
          MatCardModule 
          
} from '@angular/material';
import { Clase3Component } from './componentes/clase3/clase3.component';
import { ListaClase3Component } from './componentes/lista-clase3/lista-clase3.component';


@NgModule({
  declarations: [
    AppComponent,
    Clase2Component,
    TestMaterialComponent,
    Clase3Component,
    ListaClase3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RutasModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
