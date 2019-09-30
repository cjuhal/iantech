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
  @Input("title") title?: string;
  list$: Observable<Array<ISelect>>;
  loading$: Observable<boolean>;
  error$: Observable<Error>;
  selected: string;
  disable: boolean;
  constructor(private store: Store<IData>) {
    this.getOptions();
    this.setValues();
   }
  ngOnInit() {
    this.title == undefined ? 'Titulo' : this.title;
  }
  getOptions(){
    this.store.dispatch(new getProduct());
  }
  setValues(){
    this.list$ = this.store.select(store => store.select.items.map(item => item))
    this.loading$ = this.store.select(store =>store.select.loading);
    this.error$ = this.store.select(store =>store.select.error);
  }
  selection(){
  // this.store.dispatch(setSelect(this.selected));
  }
}
