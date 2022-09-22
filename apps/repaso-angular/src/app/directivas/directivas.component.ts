import { Component, OnInit } from "@angular/core";

interface IEstudiante {
  nombre: string;
  estado: string;
}

@Component({
  selector: "directivas",
  templateUrl: "./directivas.component.html",
  styles: [],
})
export class DirectivasComponent implements OnInit {
  listEstudiantes: IEstudiante[] = [
    {
      nombre: "Tomas Gonzalez",
      estado: "Promocionado",
    },
    {
      nombre: "Marcos Sanchez",
      estado: "Suspenso",
    },
    {
      nombre: "Marta Lopez",
      estado: "Aprobado",
    },
    {
      nombre: "Pepe Palotes",
      estado: "Promocionado",
    },
    {
      nombre: "Maria Regla",
      estado: "Promocionado",
    },
    {
      nombre: "Oscar Ternario",
      estado: "Aprobado",
    },
    {
      nombre: "Jose Luis Pedroso",
      estado: "Suspenso",
    },
  ];

  mostrar = false;

  constructor() {}

  ngOnInit(): void {}

  mostrarToggle = () => {
    this.mostrar = !this.mostrar;
  };
}
