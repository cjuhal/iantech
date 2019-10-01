import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductslistComponent } from './components/productslist/productslist.component';
import { FormComponent } from './components/form/form.component';
import { ProductoComponent } from './components/dropdowns/childrens/producto/producto.component';
import { CategoriaComponent } from './components/dropdowns/childrens/categoria/categoria.component';
import { TiendaComponent } from './components/dropdowns/childrens/tienda/tienda.component';
import { SharedModule } from '../shared/shared.module';
import { DropdownsComponent } from './components/dropdowns/dropdowns.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductReducer } from './ngrx/reducer/product.recuder';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './ngrx/effects/product.effects';
import { SelectReducer } from './ngrx/reducer/select.reducer';
import { ProductsService } from './services/products.service';
import { SelectService } from './services/select.service';
import { SelectEffects } from './ngrx/effects/select.effects';


@NgModule({
  declarations: [ProductslistComponent, FormComponent, ProductoComponent, CategoriaComponent, TiendaComponent, DashboardComponent, DropdownsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    FormsModule,
    StoreModule.forRoot({ data: ProductReducer, select: SelectReducer }),
    EffectsModule.forRoot([ProductEffects, SelectEffects]),
    StoreDevtoolsModule.instrument()

  ],
  providers: [ProductsService, SelectService],
  //pensando a futuro si quiero exportar el modulo
  exports: [ProductslistComponent, FormComponent, ProductoComponent, CategoriaComponent, TiendaComponent, DashboardComponent, DropdownsComponent],
  
})
export class ProductsModule { }
