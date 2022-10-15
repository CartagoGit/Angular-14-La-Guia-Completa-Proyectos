import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CitasPageComponent } from "./pages/citas-page/citas-page.component";
import { ListCitasComponent } from "./components/list-citas/list-citas.component";
import { CrearCitasComponent } from "./components/crear-citas/crear-citas.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [CitasPageComponent, ListCitasComponent, CrearCitasComponent],
  exports: [CitasPageComponent],
  imports: [CommonModule, FormsModule],
})
export class CitasMedicasModule {}
