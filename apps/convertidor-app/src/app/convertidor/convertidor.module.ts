import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// COMPONENTES
import { ConvertidorComponent } from "./components/convertidor/convertidor.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { ConvertidorPageComponent } from "./pages/convertidor-page/convertidor-page.component";

@NgModule({
  declarations: [
    ConvertidorComponent,
    NavbarComponent,
    ConvertidorPageComponent,
  ],
  exports: [ConvertidorPageComponent],
  imports: [CommonModule, FormsModule],
})
export class ConvertidorModule {}
