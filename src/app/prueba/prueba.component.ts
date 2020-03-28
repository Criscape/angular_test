import { Component, OnInit } from '@angular/core';
import { Prueba } from './models/prueba.models'
import { PruebaService } from './prueba.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  pruebas: Prueba[] = [];

  constructor(private pruebaServicio: PruebaService) { }

  ngOnInit(): void {
  }

  llamarEndpoint(correo: string){
    this.pruebaServicio.getObras(correo).then(pruebas => this.pruebas = pruebas).catch(er => console.log(er));
  }

}
