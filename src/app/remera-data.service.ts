import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Remera } from './remera-list/remera';

const URL = "https://6386636f875ca3273d58bbaa.mockapi.io/remeras";

@Injectable({
  providedIn: 'root'
})
export class RemeraDataService {

  private _remeras:Remera[]=[];
  private _remerasSubject : BehaviorSubject<Remera[]> = new BehaviorSubject(this._remeras);
  private remeras: Observable<Remera[]>= this._remerasSubject.asObservable();

  constructor(private http: HttpClient) { }

  public getAll() : Observable<Remera[]>{
     this.http.get<Remera[]>(URL)
              .pipe(
                tap((remeras:Remera[])=>remeras.forEach(remera=>remera.cantidad=0))
              ).subscribe(data=>this._remeras.push(... data));//dentro del pipe van las opciones de transformacion 
              return this.remeras;
  }

  public agregar(remera:any) :void{
     this.http.post<Remera>(URL, remera).subscribe({
      error: error=>{
        console.error("error");
      },
      next: data =>{
        this._remeras.push(data);
      }
    });
  }
}
