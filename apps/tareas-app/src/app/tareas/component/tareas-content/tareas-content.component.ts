import { Component, OnInit } from "@angular/core";
import { TareaModel } from "../../models/Tarea-model";

@Component({
  selector: "tareas-content",
  templateUrl: "./tareas-content.component.html",
  styles: [
    `
      input {
        text-align: center;
      }

      .form-control-lg {
        font-size: 1.8rem;
      }
    `,
  ],
})
export class TareasContentComponent implements OnInit {
  listTareas: TareaModel[] = [];
  nombreTarea = "";
  constructor() {}

  ngOnInit(): void {}

  agregarTarea(): void {
    if (!this.nombreTarea || this.nombreTarea === "") return;
    // CREAR OBJETO TAREA
    const tarea: TareaModel = {
      nombre: this.nombreTarea,
      estado: false,
    };
    // AGREGAR OBJETO TAREA AL ARRAY
    this.listTareas.push(tarea);
    // RESET EL INPUT
    this.nombreTarea = "";
  }

  eliminarTarea(indice: number): void {
    this.listTareas.splice(indice, 1);
  }

  actualizarTarea(tarea: TareaModel, indice: number): void {
    this.listTareas[indice].estado = !tarea.estado;
  }
}
