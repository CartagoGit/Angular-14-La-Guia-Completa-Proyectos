import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmpleadoListComponent } from "./components/empleado-list/empleado-list.component";
import { CountEmpleadoComponent } from "./components/empleado-list/count-empleado/count-empleado.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [EmpleadoListComponent, CountEmpleadoComponent],
  exports: [EmpleadoListComponent],
  imports: [CommonModule, FormsModule],
})
export class EmpleadosListAppModule {}
