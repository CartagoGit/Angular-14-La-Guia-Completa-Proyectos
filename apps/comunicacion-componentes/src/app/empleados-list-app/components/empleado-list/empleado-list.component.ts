import { Component, OnInit } from "@angular/core";
import { Empleado, Genero, Opciones } from "../../models/Empleado";

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
  totalFemeninos!: number;
  totalMasculinos!: number;

  readonly Genero = Genero;
  readonly Opciones = Opciones;

  radioButtonValue: string = Opciones.Todos;

  constructor() {}

  ngOnInit(): void {
    this.totalFemeninos = this.getTotalFemeninos();
    this.totalMasculinos = this.getTotalMasculinos();
  }

  getTotalFemeninos(): number {
    return this.listEmpleados.filter((list) => list.genero === Genero.Femenino)
      .length;
  }

  getTotalMasculinos(): number {
    return this.listEmpleados.filter((list) => list.genero === Genero.Masculino)
      .length;
  }

  radioChangedInChild(radioSelectedValue: string) {
    this.radioButtonValue = radioSelectedValue;
  }
}
