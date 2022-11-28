import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { RemeraCartService } from '../remera-cart.service';
import { Remera } from '../remera-list/remera';

@Component({
  selector: 'carro-compras',
  templateUrl: './carro-compras.component.html',
  styleUrls: ['./carro-compras.component.scss']
})
export class CarroComprasComponent implements OnInit {

  cartList$!: Observable<Remera[]>;


  constructor(private cart: RemeraCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

  



}
