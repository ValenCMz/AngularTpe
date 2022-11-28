import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Remera } from './remera-list/remera';

//maneja la logica del carrito 
@Injectable({
  providedIn: 'root'
})
export class RemeraCartService {

  private _cartList:Remera[]=[];//convertimos la variable que queremos observar en privada
  cartList  : BehaviorSubject<Remera[]> = new BehaviorSubject(this._cartList);

  constructor() { } 

  addToCart(remera: Remera) {
    let item : Remera = this._cartList.find((v1)=>v1.marca==remera.marca)!;
    if(!item){
      this._cartList.push({... remera}); //hacemos un clone del objeto
    }else{
      item.cantidad += remera.cantidad;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);//equivalente al emmit de eventos
   
  }

}
