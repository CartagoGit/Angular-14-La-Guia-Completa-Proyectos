import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { EmpleadosListAppModule } from "./empleados-list-app/empleados-list-app.module";


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, EmpleadosListAppModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
