import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Remera } from './remera-list/remera';

const URL = "https://6386636f875ca3273d58bbaa.mockapi.io/remeras";

@Injectable({
  providedIn: 'root'
})
export class RemeraDataService {

  constructor(private http: HttpClient) { }

  public getAll() : Observable<Remera[]>{
    return this.http.get<Remera[]>(URL)
              .pipe(
                tap((remeras:Remera[])=>remeras.forEach(remera=>remera.cantidad=0))
              );//dentro del pipe van las opciones de transformacion 
  }
}
