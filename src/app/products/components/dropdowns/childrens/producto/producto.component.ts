import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'select-producto',
  templateUrl: '../../dropdowns.component.html'
})
export class ProductoComponent implements OnInit {
  list = [];
  constructor() { }

  ngOnInit() {
  }

}
