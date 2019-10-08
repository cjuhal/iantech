import { Component, OnInit } from '@angular/core';
import { getStores } from 'src/app/products/ngrx/actions/dropdown.actions';
import { DropdownsComponent } from '../../dropdowns.component';
import { SelectStore } from 'src/app/products/ngrx/actions/select.actions';
import { map } from 'rxjs/operators';

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
  selection(){
    this.store.dispatch(new SelectStore(this.selected));
  }
}
