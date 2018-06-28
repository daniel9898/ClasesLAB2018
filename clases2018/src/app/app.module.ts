import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { RutasModule } from './rutas/rutas.module';
import { TestMaterialComponent } from './componentes/test-material/test-material.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';//test
import { 
          MatButtonModule,
          MatMenuModule,
          MatToolbarModule,
          MatIconModule,
          MatCardModule 
          
} from '@angular/material';

import { HomePersonaComponent } from './componentes/home-persona/home-persona.component';
import { FormPersonaComponent } from './componentes/form-persona/form-persona.component';
import { ListaPersonasComponent } from './componentes/lista-personas/lista-personas.component';
import { NgUploadComponent } from './componentes/ng-upload/ng-upload.component';
//import { LoginComponent } from './componentes/login/login.component';

import { FileUploadModule } from 'ng2-file-upload';
import { Ng2CloudinaryModule } from 'ng2-cloudinary';

@NgModule({
  declarations: [
    AppComponent,
    TestMaterialComponent,
    HomePersonaComponent,
    FormPersonaComponent,
    ListaPersonasComponent,
    NgUploadComponent,
    //LoginComponent
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
    MatCardModule,
    FileUploadModule,
    Ng2CloudinaryModule 
    //CloudinaryModule.forRoot(cloudinary, config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
