import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { Select } from 'src/app/shared/components/domain/select';
import { IProduct } from '../domain/iproduct';
import { IData } from '../domain/idata';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private ITEMS_URL = 'http://localhost:3000/items';
  constructor(private http: HttpClient) { }

  getItems(): Observable<Array<IData>>{
    return this.http.get<Array<IData>>(this.ITEMS_URL)
    .pipe(
      delay(500)
    );
  }

  selectProduct(productSelected: Select){
    return this.http.post(this.ITEMS_URL, productSelected)
    .pipe(
      delay(500)
    );
  }
}
