import { Component, OnInit } from '@angular/core';
import { getStores } from 'src/app/products/ngrx/actions/select.actions';
import { DropdownsComponent } from '../../dropdowns.component';

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
    this.list$ = this.store.select(store => store.select.stores.map(item => item))
  }
  selection(){
    // this.store.dispatch(setCategory(this.selected));
    }
}
