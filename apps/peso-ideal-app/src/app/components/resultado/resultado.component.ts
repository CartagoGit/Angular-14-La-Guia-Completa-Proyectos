import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-resultado",
  templateUrl: "./resultado.component.html",
  styleUrls: ["./resultados.component.css"],
})
export class ResultadoComponent implements OnInit {
  imc!: number;
  resultado!: string;
  rasgo!: string;
  interpretacion!: string;
  color = "white;";

  constructor(private activatedRoute: ActivatedRoute) {
    // console.log(activatedRoute.snapshot.paramMap.get("valor"));
  }

  ngOnInit(): void {
    this.imc = +this.activatedRoute.snapshot.paramMap.get("valor")!;
    this.calculateResultado();
    // this.activatedRoute.params.subscribe({
    //   next: (params) => {
    //     this.imc = +params["valor"];
    //   },
    // });
  }

  calculateResultado(): void {
    if (!this.imc) {
      this.resultado =
        "No se ha calculado correctamente el Índice de Masa Corporal";
      this.color = "white";
      this.interpretacion = "";
    }
    switch (true) {
      case this.imc < 18.5:
        this.resultado = "Peso bajo (Menores de 18.5)";
        this.color = "#A3BDDB";
        [this.rasgo, this.interpretacion] = this.getRasgoInterpretacion();
        return;
      case this.imc < 25:
        this.resultado = "Normal (Entre 18.5 y 24.99)";
        this.color = "#12bd45";
        [this.rasgo, this.interpretacion] = this.getRasgoInterpretacion();
        return;
      case this.imc < 30:
        this.resultado = "Sobrepeso (Mayor de 25)";
        this.color = "#F6DC19";
        [this.rasgo, this.interpretacion] = this.getRasgoInterpretacion();
        return;
      case this.imc >= 30:
        this.resultado = "Obesidad (Mayor de 25)";
        this.color = "#C64F49";
        [this.rasgo, this.interpretacion] = this.getRasgoInterpretacion();
        return;

      default:
        return;
    }
  }

  getRasgoInterpretacion(): [string, string] {
    switch (true) {
      case this.imc < 16:
        this.color = "red";
        return [
          "Delgadez severa (<16,00)",
          "Tenga cuidado, los valores del índice de masa corporal muestran una más que posible desnutrición. Acuda con presteza a algun especilista",
        ];
      case this.imc < 17:
        return [
          "Delgadez moderada (16,00-16,99)",
          "Los valores del índice de masa corporal muestran una delgadez importante. Recomendamos que acuda a algún especilista",
        ];
      case this.imc < 18.5:
        return [
          "Delgadez leve (17,00-18,49)",
          "Los valores del índice de masa corporal indican que esta por debajo de la normalidad para su peso",
        ];
      case this.imc < 23:
        return [
          "Normal, modal inferior (18,5-22,99)",
          "Los valores del índice de masa corporal indican que esta en unos valores saludables.",
        ];
      case this.imc < 25:
        return [
          "Normal, modal superior (18,5-22,99)",
          "Los valores del índice de masa corporal indican que esta en unos valores saludables.",
        ];
      case this.imc < 28:
        return [
          "Preobesidad, modal inferior (25,00-27,49)",
          "Los valores del índice de masa corporal indican que esta por encima de los valores normales. Sugerimos una dieta más saludable y la práctica de ejercicio",
        ];
      case this.imc < 30:
        return [
          "Preobesidad, modal superior (27,50-29,99)",
          "Los valores del índice de masa corporal indican que esta bastante encima de los valores normales. Sugerimos una dieta más saludable y la práctica de ejercicio. Sería recomendable la visita a algun especialista.",
        ];
      case this.imc < 33:
        return [
          "Obesidad leve, modal inferior (30,00-32,49)",
          "Los valores del índice de masa corporal indican que tiene un problema con el peso. Sería conveniente que acuda a algún especialista.",
        ];
      case this.imc < 35:
        return [
          "Obesidad leve, modal superior (32,50-34,99)",
          "Los valores del índice de masa corporal indican que tiene un problema con el peso. Acuda a algún especialista.",
        ];
      case this.imc < 38:
        return [
          "Obesidad media, modal inferior (35,00-37,49)",
          "Los valores del índice de masa corporal indican que tiene un problema importante con el peso. Acuda a algún especialista.",
        ];
      case this.imc < 40:
        return [
          "Obesidad media, modal superior (37,50-39,99)",
          "Los valores del índice de masa corporal indican que tiene un problema importante con el peso que podría llegar a afectar a su salud. Acuda a algún especialista.",
        ];
      case this.imc >= 40:
        this.color = "red";
        return [
          "Obesidad mórbida(≥40,00)",
          "Los valores del índice de masa corporal indican que podría llegar a tener importantes problemas de salud. Acuda con presteza a algún especialista.",
        ];
      default:
        return ["", ""];
    }
  }
}
