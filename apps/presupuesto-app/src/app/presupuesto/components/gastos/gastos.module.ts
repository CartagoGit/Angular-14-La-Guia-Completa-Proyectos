import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GastosComponent } from './gastos.component';
import { ListarGastoComponent } from './components/listar-gasto/listar-gasto.component';
import { IngresarGastoComponent } from './components/ingresar-gasto/ingresar-gasto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GastosComponent, IngresarGastoComponent, ListarGastoComponent],
  imports: [CommonModule, FormsModule],
  exports: [GastosComponent],
})
export class GastosModule {}
