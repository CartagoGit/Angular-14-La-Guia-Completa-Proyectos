import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dados",
  templateUrl: "./dados.component.html",
  styles: [
    `
      img {
        width: 100%;
        background-color: blue;
        border-radius: 20px;
        border: 1px solid blue;
      }
      dados-container{
        color: #3d4f61
      }
    `,
  ],
})
export class DadosComponent implements OnInit {
  dadoIzq!: string;
  dadoDer!: string;
  total!: number;

  constructor() {
    this.tirarDados();
  }

  ngOnInit(): void {}

  public tirarDados(): void {
    const num1 = Math.floor(Math.random() * 6 + 1);
    const num2 = Math.floor(Math.random() * 6 + 1);
    this.dadoIzq = "../../assets/img/dice" + num1 + ".png";
    this.dadoDer = "../../assets/img/dice" + num2 + ".png";
    this.total = num1 + num2;
  }
}
