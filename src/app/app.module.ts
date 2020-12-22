import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosPersonalesComponent } from './Persona/datos-personales/datos-personales.component';
import { SkillpersonaComponent } from './Persona/skillpersona/skillpersona.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosPersonalesComponent,
    SkillpersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
