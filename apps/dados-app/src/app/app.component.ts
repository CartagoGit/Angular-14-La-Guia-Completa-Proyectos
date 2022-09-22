import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [
    `
      h1 {
        color: white;
      }
    `,
  ],
})
export class AppComponent {
  title = "Dados App";
}
