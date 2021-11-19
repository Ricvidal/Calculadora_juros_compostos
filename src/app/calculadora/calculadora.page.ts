import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: 'calculadora.page.html',
  styleUrls: ['calculadora.page.scss'],
})
export class CalculadoraPage {
  resultado: number;
  principal: number;
  taxa: number;
  prazo: number;
  formGroup: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.resultado;
    this.principal;
    this.taxa;
    this.prazo;
    this.formGroup = formBuilder.group({
      principalControl: ['', [Validators.required, Validators.min(1)]],
      taxaControl: ['', [Validators.required, Validators.min(0)]],
      prazoControl: ['', [Validators.required, Validators.min(1)]],
    });
  }

  calcular() {
    let resultadoFixed = 0;
    resultadoFixed = this.principal * Math.pow(1 + this.taxa / 100, this.prazo);
    this.resultado = parseFloat(resultadoFixed.toFixed(2));
    return this.resultado;
  }
}
