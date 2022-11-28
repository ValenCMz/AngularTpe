import { Component, OnInit } from '@angular/core';
import { RemeraCartService } from '../remera-cart.service';
import { Remera } from './remera';

@Component({
  selector: 'remera-list',
  templateUrl: './remera-list.component.html',
  styleUrls: ['./remera-list.component.scss']
})
export class RemeraListComponent implements OnInit {

  remeras : Remera[]=[{
    imagen: "assets/img/vans_musculosa_gris.jpg",
    marca: "Vans",
    tipo: "Musculosa",
    color: "Rojo",
    precio: 200,
    stock: 10,
    oferta: false,
    cantidad: 0
  },
  {
    imagen: "assets/img/rusty.jpg",
    marca: "Rusty",
    tipo: "Manga Larga",
    color: "Rojo",
    precio: 100,
    stock: 0,
    oferta: true,
    cantidad: 0
  },
  {
    imagen: 'assets/img/volcom.jpg',
    marca: "Volcom",
    tipo: "Manga Corta",
    color: "Rojo",
    precio: 100,
    stock: 100,
    oferta: false,
    cantidad: 0   
  }
];


  constructor(private cart: RemeraCartService) {//forma de usar servicios injectados en angular, esta es la buena practica
  }

  ngOnInit(): void {
  }


  addToCart(remera: any):void{
    this.cart.addToCart(remera);
    remera.stock -= remera.cantidad;
    remera.cantidad = 0;
  }

}
