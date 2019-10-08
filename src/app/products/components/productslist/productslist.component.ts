import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { LoadItems } from '../../store/list/list.actions';
import { IStore } from '../../models/istore';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.scss']
})
export class ProductslistComponent implements OnInit {
  @Input('title') title?: String;
  list$: Observable<Array<IProduct>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;
  constructor(private store: Store<IStore>) {
    this.list$ = this.store.select(store => store.list.items)
    this.loading$ = this.store.select(store => store.list.loading)
    this.error$ = this.store.select(store => store.list.error)
    this.store.dispatch(new LoadItems());
  }

  ngOnInit() { }

}
