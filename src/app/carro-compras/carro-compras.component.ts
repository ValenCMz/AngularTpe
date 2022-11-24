import { Component, OnInit } from '@angular/core';
import { RemeraCartService } from '../remera-cart.service';

@Component({
  selector: 'carro-compras',
  templateUrl: './carro-compras.component.html',
  styleUrls: ['./carro-compras.component.scss']
})
export class CarroComprasComponent implements OnInit {

  constructor(private cart: RemeraCartService) {
   }

  ngOnInit(): void {
  }

}
