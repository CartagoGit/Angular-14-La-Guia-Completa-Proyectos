import { Component, OnInit } from "@angular/core";

interface IGeneroData {
  genero: string;
  formula: () => void;
}

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.css"],
})
export class InicioComponent implements OnInit {
  edad = 25;
  peso = 60;
  altura = 170;

  posiblesGeneros: string[] = ["Masculino", "Femenino"];
  genero = this.posiblesGeneros[0];

  private _generoData: IGeneroData[] = [
    {
      genero: this.posiblesGeneros[0],
      formula: () => {},
    },
    {
      genero: this.posiblesGeneros[1],
      formula: () => {},
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  cambiarAltura(event: Event): void {
    if (!event) return;
    this.altura = Number((event.target as HTMLInputElement).value);
  }

  seleccionarGenero(): void {
    this.genero =
      this.genero === this.posiblesGeneros[1]
        ? this.posiblesGeneros[0]
        : this.posiblesGeneros[1];
  }
}
