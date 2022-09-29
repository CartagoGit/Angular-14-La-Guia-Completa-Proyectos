import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { InicioComponent } from "./components/inicio/inicio.component";
import { ResultadoComponent } from "./components/resultado/resultado.component";

@NgModule({
  declarations: [AppComponent, InicioComponent, ResultadoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// import { RouterModule } from "@angular/router";
// RouterModule.forRoot([], { initialNavigation: "enabledBlocking" }),
