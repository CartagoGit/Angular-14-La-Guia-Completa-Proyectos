import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ConvertidorModule } from "./convertidor/convertidor.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ConvertidorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
