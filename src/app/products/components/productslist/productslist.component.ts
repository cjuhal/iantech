import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../domain/iproduct';
import { ProductsService } from '../../services/products.service';
import { IData } from '../../domain/idata';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { LoadItems } from '../../ngrx/actions/product.actions';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.scss']
})
export class ProductslistComponent implements OnInit {
  list$: Observable<Array<IProduct>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;
  title: string;
  constructor(private store: Store<IData>) {
    this.list$ = this.store.select(store => store.data.items)
    this.loading$ = this.store.select(store => store.data.loading)
    this.error$ = this.store.select(store => store.data.error)
    this.store.dispatch(new LoadItems());
   }

  ngOnInit() {
    this.title = "Lista de productos";
  }

}
