import { Component, OnInit } from '@angular/core';
import { getProducts } from 'src/app/products/ngrx/actions/dropdown.actions';
import { DropdownsComponent } from '../../dropdowns.component';
import { SelectProduct } from 'src/app/products/ngrx/actions/select.actions';
import { ISelect } from 'src/app/products/domain/iselect';

@Component({
  selector: 'select-producto',
  templateUrl: '../../dropdowns.component.html'
})
export class ProductoComponent extends DropdownsComponent implements OnInit {
  ngOnInit(){
    super.ngOnInit();
  }
  getOptions(){ 
    this.store.dispatch(new getProducts());
  }
  setValues(){
    this.list$ = this.store.select(store => store.dropdown.products.map(item => item))
  }
}
