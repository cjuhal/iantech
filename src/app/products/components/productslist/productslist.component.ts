import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../domain/iproduct';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.scss']
})
export class ProductslistComponent implements OnInit {
  list: Array<IProduct>;
  constructor(private productoService: ProductsService) { }

  ngOnInit() {
    this.productoService.getProducts().subscribe((products: IProduct[])=> this.list = products)
  }

}
