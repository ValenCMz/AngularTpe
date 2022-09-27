import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

  upCantidad(remera: Remera):void{
    if(remera.cantidad<remera.stock)
    remera.cantidad++;
  }

  downCantidad(remera: Remera):void{
    if(remera.cantidad>0)
      remera.cantidad--;
  }

}
