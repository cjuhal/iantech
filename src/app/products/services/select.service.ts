import { Injectable } from '@angular/core';
import { IProduct } from '../domain/iproduct';
import { Observable } from 'rxjs';
import { IData } from '../domain/idata';
import { Store } from '@ngrx/store';
import { ISelect } from '../domain/iselect';
import { map } from 'rxjs/operators';
import { Select } from 'src/app/shared/components/domain/select';
import { LoadItems } from '../ngrx/actions/product.actions';

@Injectable({
  providedIn: 'root'
})
export class SelectService {
  list$: Observable<Array<IProduct>>;
  constructor(private store: Store<IData>) {
    this.list$ = this.store.select(store => store.data.items)
    this.store.dispatch(new LoadItems());
   }

   getList(): Observable<Array<IProduct>>{
     return this.list$;
   }
}
