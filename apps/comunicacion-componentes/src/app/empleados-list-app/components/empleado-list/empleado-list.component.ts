import { Component, OnInit } from "@angular/core";
import { Empleado, Genero } from "../../models/Empleado";

@Component({
  selector: "app-empleado-list",
  templateUrl: "./empleado-list.component.html",
  styleUrls: ["./empleado-list.component.css"],
})
export class EmpleadoListComponent implements OnInit {
  listEmpleados: Empleado[] = [
    {
      legajo: 1,
      nombre: "Juan",
      apellido: "Perez",
      genero: Genero.Masculino,
      salario: 23000,
    },
    {
      legajo: 2,
      nombre: "Maria",
      apellido: "Ruiz",
      genero: Genero.Femenino,
      salario: 39000,
    },
    {
      legajo: 3,
      nombre: "Perico",
      apellido: "Palotes",
      genero: Genero.Masculino,
      salario: 45000,
    },
    {
      legajo: 4,
      nombre: "Ana",
      apellido: "Fernandez",
      genero: Genero.Femenino,
      salario: 28000,
    },
    {
      legajo: 5,
      nombre: "Amapola",
      apellido: "Gonzalez",
      genero: Genero.Femenino,
      salario: 13000,
    },
    {
      legajo: 6,
      nombre: "Guillermo",
      apellido: "Hotel",
      genero: Genero.Masculino,
      salario: 56000,
    },
    {
      legajo: 7,
      nombre: "Hurraca",
      apellido: "Torres",
      genero: Genero.Masculino,
      salario: 156000,
    },
  ];
  listEmpleadosMasculinos: Empleado[] = [];
  listEmpleadosFemeninos: Empleado[] = [];
  // listEmpleadosSelected: Empleado[] = [];

  readonly Genero = Genero;
  readonly Opciones = {
    Todos: "Todos",
    ...Genero,
  };
  radioButtonSeleccionado: string = this.Opciones.Todos;

  constructor() {
    console.log(this.Opciones);
  }

  ngOnInit(): void {
    this.listEmpleadosFemeninos = this.listEmpleados.filter(
      (list) => list.genero === Genero.Femenino
    );
    this.listEmpleadosMasculinos = this.listEmpleados.filter(
      (list) => list.genero === Genero.Masculino
    );
    // this.radioChange();
  }

  // radioChange() {
  //   this.listEmpleadosSelected =
  //     this.radioButtonSeleccionado === this.Opciones.Todos
  //       ? [...this.listEmpleados]
  //       : this.radioButtonSeleccionado === this.Opciones.Femenino
  //       ? [...this.listEmpleadosFemeninos]
  //       : [...this.listEmpleadosMasculinos];
  // }
}
