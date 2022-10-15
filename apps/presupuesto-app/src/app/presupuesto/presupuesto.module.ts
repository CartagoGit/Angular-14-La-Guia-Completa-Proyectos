import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GastosModule } from './components/gastos/gastos.module';

import { IngresarPresupuestosComponent } from './components/ingresar-presupuestos/ingresar-presupuestos.component';
import { PresupuestoRoutingModule } from './presupuesto-routing.module';

@NgModule({
  declarations: [IngresarPresupuestosComponent],
  imports: [CommonModule, FormsModule, PresupuestoRoutingModule, GastosModule],
  exports: [],
})
export class PresupuestoModule {}
