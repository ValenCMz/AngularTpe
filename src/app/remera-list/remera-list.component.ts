import { Component, OnInit } from '@angular/core';
import { RemeraCartService } from '../remera-cart.service';
import { RemeraDataService } from '../remera-data.service';
import { Remera } from './remera';

@Component({
  selector: 'remera-list',
  templateUrl: './remera-list.component.html',
  styleUrls: ['./remera-list.component.scss']
})
export class RemeraListComponent implements OnInit {

  remeras : Remera[]=[];
  carts : Remera [] = [];

  constructor(private cart: RemeraCartService, private remerasDataService: RemeraDataService) {//forma de usar servicios injectados en angular, esta es la buena practica
  }

  ngOnInit(): void {
    this.remerasDataService.getAll()
      .subscribe(remeras=>this.remeras = remeras);
      this.cart.cartList.subscribe((c)=>this.carts=c);
  }

  addToCart(remera: any): void {
      this.cart.addToCart(remera);
      remera.cantidad=0;
  }
  
  stock(remera: Remera) {
    let item = this.carts.find((v1)=>v1.marca===remera.marca);
    if(!item) {
      return remera.stock;
    }
    else {
      return remera.stock-item.cantidad;
    }
  }
}
