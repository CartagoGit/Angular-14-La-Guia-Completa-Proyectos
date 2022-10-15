import { Component, Input, OnInit } from '@angular/core';
import { Cita } from '../../interfaces/cita.interface';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styles: [],
})
export class ListCitasComponent implements OnInit {
  @Input() citas: Cita[] = [];
  constructor() {}

  ngOnInit(): void {}

  eliminarCita(index: number): void {

    this.citas.splice(index, 1);
  }
}
