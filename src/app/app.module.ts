import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
//crear un módulo llamado contadorModule
//declaracions y exportaciones

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
