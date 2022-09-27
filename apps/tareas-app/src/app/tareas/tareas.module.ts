import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TareasPageComponent } from "./pages/tareas-page/tareas-page.component";
import { NavbarComponent } from "./shared/navbar-shared/navbar-shared.component";
import { TareasContentComponent } from "./component/tareas-content/tareas-content.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [TareasPageComponent, NavbarComponent, TareasContentComponent],
  imports: [CommonModule, FormsModule],
  exports: [TareasPageComponent],
})
export class TareasModule {}
