import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RemeraListComponent } from './remera-list/remera-list.component';
import { FormsModule } from '@angular/forms';
import { TiendaAboutComponent } from './tienda-about/tienda-about.component';
import { TiendaRemerasComponent } from './tienda-remeras/tienda-remeras.component';
import { CarroComprasComponent } from './carro-compras/carro-compras.component';


@NgModule({
  declarations: [
    AppComponent,
    RemeraListComponent,
    TiendaAboutComponent,
    TiendaRemerasComponent,
    CarroComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
