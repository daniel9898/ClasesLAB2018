import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { RutasModule } from './rutas/rutas.module';
import { Clase2Component } from './componentes/clase2/clase2.component';


@NgModule({
  declarations: [
    AppComponent,
    Clase2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RutasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
