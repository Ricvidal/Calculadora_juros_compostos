import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  resultado: number;
  principal: number;
  taxa: number;
  prazo: number;

  constructor() {
    this.resultado;
    this.principal;
    this.taxa;
    this.prazo;
  }

  calcular() {
    let resultadoComFixed = 0;
    resultadoComFixed =
      this.principal * Math.pow(1 + this.taxa / 100, this.prazo);
    
    this.resultado = parseFloat(resultadoComFixed.toFixed(2));
    return this.resultado;
  }
}
