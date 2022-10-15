import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { CitasMedicasModule } from "./citas-medicas/citas-medicas.module";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, CitasMedicasModule],
  providers: [],
})
export class AppModule {}
