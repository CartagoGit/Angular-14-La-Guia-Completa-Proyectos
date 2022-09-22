import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-piano",
  templateUrl: "./piano.component.html",
  styles: [
    `
      .list-group-item {
        cursor: pointer;
        height: 50px;
      }

      .list-group-item:active {
        opacity: 0.5;
      }
    `,
  ],
})
export class PianoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  aplicarSonido(num: number): void {
    const audio = new Audio();
    audio.src = "../../assets/sounds/note" + num + ".wav";
    audio.load();
    audio.play();
  }
}
