import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Gasto } from '../components/gastos/interfaces/gasto.interface';

@Injectable({
  providedIn: 'root',
})
export class PresupuestoService {
  presupuesto!: number;
  restante!: number;
  private gastos$ = new Subject<Gasto>

  constructor() {}

  agregarGasto(gasto: Gasto): void {
    this.restante = this.restante - gasto.cantidad;
    this.gastos$.next(gasto)
  }

  getGastos() : Observable<Gasto>{
    return this.gastos$.asObservable();
  }
}
