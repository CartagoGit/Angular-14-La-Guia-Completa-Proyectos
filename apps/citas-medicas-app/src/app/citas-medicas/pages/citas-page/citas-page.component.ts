import { Component, OnInit } from '@angular/core';
import { Cita } from '../../interfaces/cita.interface';

@Component({
  selector: 'app-citas-page',
  templateUrl: './citas-page.component.html',
  styleUrls: ['./citas-page.component.css'],
})
export class CitasPageComponent implements OnInit {
  public title: string = 'App de Citas Médicas';
  public citas: Cita[] = [
    {
      nombre: 'Mario',
      fecha: Date.now().toLocaleString(),
      hora: '12:11:22',
      sintomas: 'Me duele de tooooo',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  agregarCita(cita: Cita): void {
    this.citas.push(cita);
  }
}
