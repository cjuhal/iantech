import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../domain/iproduct';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  data = '../../../assets/data/data.json';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.data);
  }
}
