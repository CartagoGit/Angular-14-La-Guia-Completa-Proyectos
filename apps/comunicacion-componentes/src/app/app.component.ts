import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div class="container mt-3">
      <app-empleado-list></app-empleado-list>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = "Comunicación entre componentes - Empleados List App";
}
