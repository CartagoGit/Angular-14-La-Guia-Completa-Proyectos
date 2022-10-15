import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastosComponent } from './components/gastos/gastos.component';
import { IngresarPresupuestosComponent } from './components/ingresar-presupuestos/ingresar-presupuestos.component';

const routes: Routes = [
  {
    path: 'presupuesto',
    children: [
      {
        path: 'ingresar-presupuesto',
        component: IngresarPresupuestosComponent,
      },
      {
        path: 'gastos',
        component: GastosComponent,
      },
      {
        path: '**',
        redirectTo: 'ingresar-presupuesto',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresupuestoRoutingModule {}
