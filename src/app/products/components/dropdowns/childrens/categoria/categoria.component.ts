import { Component, OnInit } from '@angular/core';
import { getCategories } from 'src/app/products/store/dropdown/dropdown.actions';
import { DropdownsComponent } from '../../dropdowns.component';
import { SelectCategory } from 'src/app/products/store/select/select.actions';

@Component({
  selector: 'select-categoria',
  templateUrl: '../../dropdowns.component.html'
})
export class CategoriaComponent extends DropdownsComponent implements OnInit {
  ngOnInit() {
    super.ngOnInit();
  }

  getOptions() {
    this.store.dispatch(new getCategories());
  }
  setValues() {
    this.list$ = this.store.select(store => store.dropdown.categories.map(item => item))
  }
  selection() {
    this.store.dispatch(new SelectCategory(this.selected));
  }
}
