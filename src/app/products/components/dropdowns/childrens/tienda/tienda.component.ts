import { Component, OnInit } from '@angular/core';
import { getStores } from 'src/app/products/ngrx/actions/dropdown.actions';
import { DropdownsComponent } from '../../dropdowns.component';
import { SelectProduct } from 'src/app/products/ngrx/actions/select.actions';

@Component({
  selector: 'select-tienda',
  templateUrl: '../../dropdowns.component.html'
})
export class TiendaComponent extends DropdownsComponent implements OnInit {
  ngOnInit(){
    super.ngOnInit();
  }
  getOptions(){ 
    this.store.dispatch(new getStores());
  }
  setValues(){
    this.list$ = this.store.select(store => store.dropdown.stores.map(item => item))
  }
}
