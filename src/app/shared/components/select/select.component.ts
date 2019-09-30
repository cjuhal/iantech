import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Select } from '../domain/select';
import { IData } from 'src/app/products/domain/idata';
import { LoadItems } from 'src/app/products/ngrx/actions/product.actions';
import { ISelect } from 'src/app/products/domain/iselect';
import { getProduct } from 'src/app/products/ngrx/actions/select.actions';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input("list") list: Array<any>;
  @Input("title") title: string;
  list$: Observable<Array<ISelect>>;
  selected: string;
  disable: boolean;
  constructor(private store: Store<IData>) {
    this.store.dispatch(new getProduct());
    this.list$ = this.store.select(store => {
      console.log(store.select.items);
      return store.select.items.map(item => item)
    })
   }
  ngOnInit() {
    this.title= "example";
    this.disable = false;
    this.checkAvaible();
  }
  checkAvaible(){
    if(this.list.length == 0){
      this.disable = true;
    }
  }
  action(){
  // this.store.dispatch(setSelect(this.selected));
  }
}
