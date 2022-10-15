import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from '../../services/presupuesto.service';

@Component({
  selector: 'app-ingresar-presupuestos',
  templateUrl: './ingresar-presupuestos.component.html',
  styleUrls: ['./ingresar-presupuestos.component.css'],
})
export class IngresarPresupuestosComponent implements OnInit {
  public cantidad: number = 0;
  public esCantidadCorrecta: boolean = false;

  constructor(
    private _presupuestoService: PresupuestoService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  public agregar(): void {
    if (this.cantidad <= 0) {
      this.esCantidadCorrecta = true;
      return;
    }
    this.esCantidadCorrecta = false;
    this._presupuestoService.presupuesto = this.cantidad;
    this._presupuestoService.restante = this.cantidad;
    this._router.navigate(['/presupuesto/gastos']);
  }
}
