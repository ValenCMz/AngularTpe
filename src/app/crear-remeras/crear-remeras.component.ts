import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RemeraDataService } from '../remera-data.service';
import { Remera } from '../remera-list/remera';

@Component({
  selector: 'crear-remeras',
  templateUrl: './crear-remeras.component.html',
  styleUrls: ['./crear-remeras.component.scss']
})
export class CrearRemerasComponent implements OnInit {

  remeraForm = new FormGroup({
    imagen: new FormControl(''),
    marca: new FormControl(''),
    tipo: new FormControl(''),
    color: new FormControl(''),
    precio: new FormControl(''),
    stock: new FormControl(''),
    oferta: new FormControl(false),
    cantidad: new FormControl(0),


  })

  constructor(private remeraDataService: RemeraDataService ) { }

  ngOnInit(): void {
  }

  public agregarRemera(){
    
    this.remeraDataService.agregar(this.remeraForm.value);
  }
}
