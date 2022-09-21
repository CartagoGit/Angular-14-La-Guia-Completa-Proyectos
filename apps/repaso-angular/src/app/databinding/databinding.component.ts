import { Component } from '@angular/core';

@Component({
  selector: 'databinding',
  templateUrl: './databinding.component.html',
  styles: [],
})
export class DatabindingComponent {
  nombre = 'Juan';
  textoPlaceholder = 'Escriba Algo Aquí biribiribiririririri';
  public deshabilitado = false;
  imgSrc =
    'https://cas-training.com/wp-content/uploads/2020/09/angular-todo-lo-que-necesitas-saber.png';
  texto = ' Esto es una clase sobre event binding';
  texto2wdb = '';

  constructor() {
    setInterval(() => {
      this.nombre = 'Tomas';
    }, 2000);
    setInterval(() => {
      this.deshabilitado = true;
      this.textoPlaceholder =
        'JAJAJJA tardaste demasiado en escribir, te quedaste con las ganas de poder escribir en este input deshabilitado WUAJAJAJ';
    }, 2000);
  }

  getSuma(numero1: number, numbero2: number) {
    return numero1 + numbero2;
  }

  botonClickeado() {
    this.texto = 'Hemos cambiado el texto con un event binding!';
  }
}
