import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatividad',
  templateUrl: './relatividad.component.html',
  styleUrls: ['./relatividad.component.css']
})
export class RelatividadComponent implements OnInit {

  public dilTiempo = {

    tCarac: null,
    tTotal: null,
    velocidad: null,
    factorLorentz: null
  }

  public velocidadLuz:number = 3E8;

  constructor() { }

  ngOnInit() {
  }

  public resultadoDilTiempo(){

    this.dilTiempo.factorLorentz = 1/(Math.sqrt(1 - (Math.pow(this.dilTiempo.velocidad, 2)/Math.pow(this.velocidadLuz, 2))));
    this.dilTiempo.tTotal = this.dilTiempo.tCarac * this.dilTiempo.factorLorentz;
  }
}
