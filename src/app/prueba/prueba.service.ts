import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Prueba } from './models/prueba.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(private PruebaHttp: HttpClient) { }

  getObras(correo: String) {
    return this.PruebaHttp.get<Prueba[]>(`${environment.endpoint}${correo}`).toPromise();
  }

}
