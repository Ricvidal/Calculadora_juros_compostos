import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  resultado: number;
  principal: number;
  taxa: number;
  prazo: number;

  constructor() {
    this.resultado = 0;
    this.principal = 10;
    this.taxa = 0.5;
    this.prazo = 1; 
  }

  calcular(){
    this.resultado=this.principal*(Math.pow((1+this.taxa/100), this.prazo));
    return this.resultado;
  }

}
