import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from '../../services/presupuesto.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css'],
})
export class GastosComponent implements OnInit {
  public presupuesto!: number;
  constructor(
    private _presupuestoService: PresupuestoService,
    private _router: Router
  ) {
    if (!this._presupuestoService.presupuesto) this._router.navigate(['']);
    this.presupuesto = this._presupuestoService.presupuesto;
  }

  ngOnInit(): void {}
}
