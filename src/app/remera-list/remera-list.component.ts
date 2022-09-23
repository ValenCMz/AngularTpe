import { Component, OnInit } from '@angular/core';
import { remera } from './remera';

@Component({
  selector: 'remera-list',
  templateUrl: './remera-list.component.html',
  styleUrls: ['./remera-list.component.scss']
})
export class RemeraListComponent implements OnInit {

  remeras : remera[]=[{
    imagen: "assets/img/vans_musculosa_gris.jpg",
    marca: "Vans",
    tipo: "Musculosa",
    color: "Rojo",
    precio: 200,
    stock: 10,
    oferta: false
  },
  {
    imagen: "assets/img/rusty.jpg",
    marca: "Rusty",
    tipo: "Manga Larga",
    color: "Rojo",
    precio: 100,
    stock: 0,
    oferta: true
  },
  {
    imagen: 'assets/img/volcom.jpg',
    marca: "Volcom",
    tipo: "Manga Corta",
    color: "Rojo",
    precio: 100,
    stock: 100,
    oferta: false   
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
