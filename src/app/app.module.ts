import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RemeraListComponent } from './remera-list/remera-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TiendaAboutComponent } from './tienda-about/tienda-about.component';
import { TiendaRemerasComponent } from './tienda-remeras/tienda-remeras.component';
import { CarroComprasComponent } from './carro-compras/carro-compras.component';
import { ImputIntegerComponent } from './imput-integer/imput-integer.component';
import { CrearRemerasComponent } from './crear-remeras/crear-remeras.component';


@NgModule({
  declarations: [
    AppComponent,
    RemeraListComponent,
    TiendaAboutComponent,
    TiendaRemerasComponent,
    CarroComprasComponent,
    ImputIntegerComponent,
    CrearRemerasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
