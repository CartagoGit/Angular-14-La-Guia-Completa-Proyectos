import { Component, OnInit } from "@angular/core";

interface IMoneda {
  symbol: string;
  rate: number;
}

@Component({
  selector: "app-convertidor",
  templateUrl: "./convertidor.component.html",
  styles: [
    `
      .badge {
        margin: 2px;
        font-size: 150%;
      }

      label {
        font-size: 150%;
        color: white;
      }
    `,
  ],
})
export class ConvertidorComponent implements OnInit {
  cantidad = 0;
  tengo = "USD";
  quiero = "EUR";
  total = 0;

  monedas: IMoneda[] = [
    { rate: 1, symbol: "USD" },
    { rate: 0.96, symbol: "EUR" },
    { rate: 1.07, symbol: "LIBRAS" },
  ];

  constructor() {}

  ngOnInit(): void {}

  convertir() {
    if (this.tengo === this.quiero) {
      this.total = this.cantidad;
      return;
    }
    const monTengo = this.monedas.find(
      (moneda) => moneda.symbol === this.tengo
    );
    const monQuiero = this.monedas.find(
      (moneda) => moneda.symbol === this.quiero
    );
    //Convertir las monedas a dolares
    const cantidadEnDolares = monTengo ? monTengo.rate * this.cantidad : 0;

    //Pasarlas a la moneda que queremos la conversion
    this.total = monQuiero ? cantidadEnDolares / monQuiero.rate : 0;
  }
}
