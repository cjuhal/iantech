import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { IData } from '../domain/idata';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private ITEMS_URL = environment.apiUrl+'items';
  constructor(private http: HttpClient) { }

  getItems(): Observable<Array<IData>>{
    return this.http.get<Array<IData>>(this.ITEMS_URL)
    .pipe(
      delay(500)
    );
  }

}
