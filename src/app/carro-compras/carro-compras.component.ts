import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RemeraCartService } from '../remera-cart.service';
import { Remera } from '../remera-list/remera';

@Component({
  selector: 'carro-compras',
  templateUrl: './carro-compras.component.html',
  styleUrls: ['./carro-compras.component.scss']
})
export class CarroComprasComponent implements OnInit {
 
 
  cartList$: Observable<Remera[]>;


  constructor(private cart: RemeraCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

  deleteToCart(remera: Remera):void{
    this.cart.deleteToCart(remera);
    remera.stock += remera.cantidad;
  }

  calcTotal(){
    let sum=0;
    this.cartList$.forEach(element => {
      element.forEach(prod=>{
        sum += prod.cantidad* prod.precio;
      })
    });
    return sum;
  }


  



}
