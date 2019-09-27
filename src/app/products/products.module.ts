import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductslistComponent } from './components/productslist/productslist.component';
import { FormComponent } from './components/form/form.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductoComponent } from './components/products/childrens/producto/producto.component';
import { CategoriaComponent } from './components/products/childrens/categoria/categoria.component';
import { TiendaComponent } from './components/products/childrens/tienda/tienda.component';


@NgModule({
  declarations: [ProductslistComponent, FormComponent, ProductsComponent, ProductoComponent, CategoriaComponent, TiendaComponent, DashboardComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  //pensando a futuro si quiero exportar el modulo
  exports: [ProductslistComponent, FormComponent, ProductsComponent, ProductoComponent, CategoriaComponent, TiendaComponent, DashboardComponent],
  
})
export class ProductsModule { }
