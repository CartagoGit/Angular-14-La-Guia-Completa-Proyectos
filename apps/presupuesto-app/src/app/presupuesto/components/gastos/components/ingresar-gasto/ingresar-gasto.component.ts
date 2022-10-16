import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../../../services/presupuesto.service';
import { Gasto } from '../../interfaces/gasto.interface';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css'],
})
export class IngresarGastoComponent implements OnInit {
  nombreGasto!: string | undefined;
  cantidad!: number | undefined;
  esFormularioValido: boolean = true;
  textoDelError!: string | undefined;

  constructor(private _presupuestoService: PresupuestoService) {}

  ngOnInit(): void {}

  agregarGasto(): void {
    if (this.hayErrores()) return;

    //* Creamos el objeto gasto
    const gasto: Gasto = {
      nombre: this.nombreGasto!,
      cantidad: this.cantidad!,
    };

    this._presupuestoService.agregarGasto(gasto);

    this.resetearFormulario();
  }

  hayErrores(): boolean {
    this.textoDelError = undefined;
    this.esFormularioValido = true;
    if (
      this.nombreGasto === '' ||
      !this.nombreGasto ||
      this.cantidad === undefined
    ) {
      this.textoDelError = 'Los campos son obligatorios';
    } else if (this.cantidad <= 0) {
      this.textoDelError = 'La cantidad debe ser mayor a 0';
    } else if (this.cantidad > this._presupuestoService.restante) {
      this.textoDelError = 'No se puede gastar más de lo que tenemos';
    } else {
      return false;
    }
    this.esFormularioValido = false;
    return true;
  }

  resetearFormulario(): void {
    this.nombreGasto = undefined;
    this.cantidad = undefined;
    this.esFormularioValido = true;
    this.textoDelError = undefined;
  }
}
