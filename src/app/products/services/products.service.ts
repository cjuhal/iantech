import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { IData } from '../domain/idata';
import { environment } from 'src/environments/environment';
import { IProduct } from './../domain/iproduct';
import { LoadItems } from '../ngrx/actions/list.actions';
import { IStore } from './../domain/istore';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private ITEMS_URL = environment.apiUrl+'items';
  list$: Observable<Array<IProduct>>;
  constructor(private http: HttpClient,private store: Store<IStore>) {
    this.list$ = this.store.select(store => store.list.items)
    this.store.dispatch(new LoadItems());
   }

  getList(): Observable<Array<IProduct>>{
     return this.list$;
   }
   
  getItems(): Observable<Array<IData>>{
    return this.http.get<Array<IData>>(this.ITEMS_URL)
    .pipe(
      delay(500)
    );
  }

}
