import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

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

  constructor(private router: Router) {}

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

  calcularIMC() {
    const IMC: number = this.getIMC();
    this.router.navigate(["/resultado", IMC]);
  }

  getIMC = (): number => {
    const num = this.peso / Math.pow(this.altura / 100, 2);
    //REDONDEAR CON EXACTITUD A DOS DECIMALES
    return Math.round((num + Number.EPSILON) * 100) / 100;
  };
}
