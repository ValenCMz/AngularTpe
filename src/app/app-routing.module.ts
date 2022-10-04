import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaRemerasComponent } from "./tienda-remeras/tienda-remeras.component";
import { TiendaAboutComponent } from "./tienda-about/tienda-about.component";
const routes: Routes = [
  {
    path: '',
    redirectTo: 'remeras',
    pathMatch:'full'
  },
  {
  path: 'remeras',
  component: TiendaRemerasComponent
  },
  {
    path: 'about',
    component: TiendaAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
