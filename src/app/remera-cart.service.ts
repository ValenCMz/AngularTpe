import { Injectable } from '@angular/core';
import { Remera } from './remera-list/remera';

//maneja la logica del carrito 
@Injectable({
  providedIn: 'root'
})
export class RemeraCartService {

  cartList  : Remera[] = [];

  constructor() { } 

  addToCart(remera: Remera) {
    let item : Remera = this.cartList.find((v1)=>v1.marca==remera.marca);
    if(!item){
      this.cartList.push(remera);  
    }
   
  }

}
