import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'presupuesto', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./presupuesto/presupuesto.module').then(
        (m) => m.PresupuestoModule
      ),
  },
  {
    path: '**',
    redirectTo: 'presupuesto',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
