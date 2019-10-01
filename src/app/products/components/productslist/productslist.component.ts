import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../../domain/iproduct';
import { ProductsService } from '../../services/products.service';
import { IData } from '../../domain/idata';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { LoadItems } from '../../ngrx/actions/product.actions';
import { IStore } from '../../domain/istore';
import { stringify } from 'querystring';

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
    this.list$ = this.store.select(store => store.data.items)
    this.loading$ = this.store.select(store => store.data.loading)
    this.error$ = this.store.select(store => store.data.error)
    this.store.dispatch(new LoadItems());
   }

  ngOnInit() {
  }

}
