import { Component, OnInit } from '@angular/core';
import { getProducts } from 'src/app/products/store/dropdown/dropdown.actions';
import { DropdownsComponent } from '../../dropdowns.component';
import { SelectProduct } from 'src/app/products/store/select/select.actions';

@Component({
  selector: 'select-producto',
  templateUrl: '../../dropdowns.component.html'
})
export class ProductoComponent extends DropdownsComponent implements OnInit {
  ngOnInit() {
    super.ngOnInit();
  }
  getOptions() {
    this.store.dispatch(new getProducts());
  }
  setValues() {
    this.list$ = this.store.select(store => store.dropdown.products.map(item => item))
  }
  selection() {
    this.store.dispatch(new SelectProduct(this.selected));
  }
}
