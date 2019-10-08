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
import { EffectsModule } from '@ngrx/effects';
import { ListEffects } from './ngrx/effects/list.effects';
import { DropdownReducer } from './ngrx/reducer/dropdown.reducer';
import { ProductsService } from './services/products.service';
import { DropdownEffects } from './ngrx/effects/dropdown.effects';
import { ListReducer } from './ngrx/reducer/list.reducer';
import { SelectReducer } from './ngrx/reducer/select.reducer';
import { SelectEffects } from './ngrx/effects/select.effects';


@NgModule({
  declarations: [ProductslistComponent, FormComponent, ProductoComponent, CategoriaComponent, TiendaComponent, DashboardComponent, DropdownsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    FormsModule,
    StoreModule.forRoot({ list: ListReducer, dropdown: DropdownReducer, select: SelectReducer }),
    EffectsModule.forRoot([ListEffects, DropdownEffects, SelectEffects]),
    StoreDevtoolsModule.instrument()

  ],
  providers: [ProductsService],
  //pensando a futuro si quiero exportar el modulo
  exports: [ProductslistComponent, FormComponent, ProductoComponent, CategoriaComponent, TiendaComponent, DashboardComponent, DropdownsComponent],
  
})
export class ProductsModule { }
