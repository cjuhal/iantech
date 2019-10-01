import { Component, OnInit } from '@angular/core';
import { getCategories } from 'src/app/products/ngrx/actions/select.actions';
import { DropdownsComponent } from '../../dropdowns.component';

@Component({
  selector: 'select-categoria',
  templateUrl: '../../dropdowns.component.html'
})
export class CategoriaComponent extends DropdownsComponent implements OnInit {
  ngOnInit(){
    super.ngOnInit();
  }

  getOptions(){ 
    this.store.dispatch(new getCategories());
  }
  setValues(){
    this.list$ = this.store.select(store => store.select.categories.map(item => item))
  }
  selection(){
      // this.store.dispatch(setCategory(this.selected));
    }
}
