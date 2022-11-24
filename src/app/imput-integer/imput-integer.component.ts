import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Remera } from '../remera-list/remera';
import { RemeraListComponent } from '../remera-list/remera-list.component';


@Component({
  selector: 'app-imput-integer',
  templateUrl: './imput-integer.component.html',
  styleUrls: ['./imput-integer.component.scss']
})
export class ImputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  cantidad!: number;

  @Input()
  max!:number;

  @Output()
  cantidadChange : EventEmitter<number> = new EventEmitter<number>();
  
  ngOnInit(): void {
  }

  
  upCantidad():void{
    if(this.cantidad<this.max)
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
  }

  downCantidad():void{
    if(this.cantidad>0)
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
  }
}
