import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatividad',
  templateUrl: './relatividad.component.html',
  styleUrls: ['./relatividad.component.css']
})
export class RelatividadComponent{

  public dilTiempo = {

    tCarac: null,
    tTotal: null,
    velocidad: null,
    factorLorentz: null,
    invertirDatos:false
  }

  public contLong = {

    lCarac: null,
    lTotal: null,
    velocidad: null,
    factorLorentz: null,
    invertirDatos:false
  }

  public velocidadLuz:number = 3E8;
  public relEspacial:boolean = false;

  constructor() { }

  public relEspecialSelecc(evt:any):void{

    if(evt.target.value === "") return;
    if(evt.target.value === "dt") this.relEspacial = false;
    if(evt.target.value === "cl") this.relEspacial = true;
  }

  public resultadoDilTiempo(param:boolean):void{

    this.dilTiempo.factorLorentz = 1/(Math.sqrt(1 - (Math.pow(this.dilTiempo.velocidad, 2)/Math.pow(this.velocidadLuz, 2))));
    
    if(!param)  this.dilTiempo.tTotal = this.dilTiempo.tCarac * this.dilTiempo.factorLorentz;
    else this.dilTiempo.tCarac = this.dilTiempo.tTotal / this.dilTiempo.factorLorentz; 
  }

  public resultadoContLongitud(param:boolean):void{

    this.contLong.factorLorentz = 1/(Math.sqrt(1 - (Math.pow(this.contLong.velocidad, 2)/Math.pow(this.velocidadLuz, 2))));

    if(!param) this.contLong.lTotal = this.contLong.lCarac / this.contLong.factorLorentz;
    else this.contLong.lCarac =this.contLong.lTotal * this.contLong.factorLorentz;
  }
}
