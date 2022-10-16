import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from '../../../../services/presupuesto.service';
import { Gasto } from '../../interfaces/gasto.interface';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css'],
})
export class ListarGastoComponent implements OnInit, OnDestroy {
  private _subcription!: Subscription;
  public presupuesto!: number;
  public restante!: number;
  public listGastos: Gasto[] = [];
  public claseColorRestante: string = 'alert-success';

  constructor(private _presupuestoService: PresupuestoService) {
    this._subcription = this._presupuestoService.getGastos().subscribe({
      next: (data) => {
        console.log(data);
        this.restante = this.restante - data.cantidad;
        this.listGastos.push(data);
        this._calcularColorDelRestante();
      },
    });
  }

  ngOnInit(): void {
    this.presupuesto = this._presupuestoService.presupuesto;
    this.restante = this._presupuestoService.restante;
  }

  ngOnDestroy(): void {
    this._subcription.unsubscribe();
  }

  private _calcularColorDelRestante(): void {
    let clase = '';
    const decimoDelPresupuesto = this.presupuesto / 10;
    if (decimoDelPresupuesto * 7.5 < this.restante) clase = 'alert-success';
    else if (decimoDelPresupuesto * 5 < this.restante) clase = 'alert-primary';
    else if (decimoDelPresupuesto * 2.5 < this.restante) clase = 'alert-dark';
    else if (decimoDelPresupuesto * 1 < this.restante) clase = 'alert-warning';
    else clase = 'alert-danger';
    this.claseColorRestante = clase;
  }
}
