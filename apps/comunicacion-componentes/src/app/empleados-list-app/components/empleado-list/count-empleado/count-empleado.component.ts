import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Genero, Opciones } from "../../../models/Empleado";

@Component({
  selector: "app-count-empleado",
  templateUrl: "./count-empleado.component.html",
  styleUrls: ["./count-empleado.component.css"],
})
export class CountEmpleadoComponent implements OnInit {
  readonly Genero = Genero;
  readonly Opciones = Opciones;

  @Input() totalTodos: number = 0;
  @Input() totalFemeninos: number = 0;
  @Input() totalMasculinos: number = 0;

  @Output() countRadioButtonChange = new EventEmitter<string>();
  radioButtonSeleccionado: string = this.Opciones.Todos;
  constructor() {}

  ngOnInit(): void {}

  radioChange(): void {
    this.countRadioButtonChange.emit(this.radioButtonSeleccionado);
  }
}
