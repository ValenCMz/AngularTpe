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


  constructor(private cart: RemeraCartService, private remerasDataService: RemeraDataService) {//forma de usar servicios injectados en angular, esta es la buena practica
  }

  ngOnInit(): void {
    this.remerasDataService.getAll()
      .subscribe(remeras=>this.remeras = remeras);
  }


  addToCart(remera: any):void{
    this.cart.addToCart(remera);
    remera.stock -= remera.cantidad;
    remera.cantidad = 0;
  }

}
