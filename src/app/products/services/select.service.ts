import { Injectable } from '@angular/core';
import { IProduct } from '../domain/iproduct';
import { Observable } from 'rxjs';
import { Store, props } from '@ngrx/store';
import { delay } from 'rxjs/operators';
import { Select } from 'src/app/shared/components/domain/select';
import { LoadItems } from '../ngrx/actions/list.actions';
import { IStore } from '../domain/istore';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ISelect } from '../domain/iselect';

@Injectable({
  providedIn: 'root'
})
export class SelectService {
  private ITEMS_URL = environment.apiUrl+'selected';
  list$: Observable<Array<IProduct>>;
  constructor(private http: HttpClient,private store: Store<IStore>) {
    this.list$ = this.store.select(store => store.list.items)
    this.store.dispatch(new LoadItems());
   }

   getList(): Observable<Array<IProduct>>{
     return this.list$;
   }

   selectProduct(productSelected: ISelect){
     console.log(productSelected);
    return this.http.post(this.ITEMS_URL, productSelected)
    .pipe(
      delay(500)
    );
  }
  
}
