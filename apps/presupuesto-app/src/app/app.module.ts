import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PresupuestoModule } from './presupuesto/presupuesto.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PresupuestoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
