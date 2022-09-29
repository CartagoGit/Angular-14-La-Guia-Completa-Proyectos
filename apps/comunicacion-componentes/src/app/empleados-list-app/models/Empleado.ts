export class Empleado {
  legajo: number;
  nombre: string;
  apellido: string;
  genero: Genero;
  salario: number;

  constructor(
    legajo: number,
    nombre: string,
    apellido: string,
    genero: Genero,
    salario: number
  ) {
    this.legajo = legajo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.genero = genero;
    this.salario = salario;
  }
}

export enum Genero {
  Femenino = "Femenino",
  Masculino = "Masculino",
}
