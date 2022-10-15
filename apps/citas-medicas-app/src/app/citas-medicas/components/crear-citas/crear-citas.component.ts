import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Cita } from "../../interfaces/cita.interface";

@Component({
  selector: "app-crear-citas",
  templateUrl: "./crear-citas.component.html",
  styleUrls: ["./crear-citas.component.css"],
})
export class CrearCitasComponent implements OnInit {
  @Output() nuevaCita = new EventEmitter<Cita>();

  public nombre: string = "";
  public fecha: string = "";
  public hora: string = "";
  public sintomas: string = "";
  public esFormularioCorrecto: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  agregarCita(): void {
    let hayError = false;
    this.esFormularioCorrecto = true;
    document
      .querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(".form-control")
      .forEach((node) => {
        if (node.value === "") hayError = true;
      });
    if (hayError) {
      this.esFormularioCorrecto = false;
      return;
    }

    //* Creamos objeto para enviarselo al padre
    const cita: Cita = {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas,
    };

    this.nuevaCita.emit(cita);
    this.resetCampos();
  }

  public resetCampos(): void {
    this.nombre = "";
    this.fecha = "";
    this.hora = "";
    this.sintomas = "";
  }
}
