import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'select-categoria',
  templateUrl: '../../dropdowns.component.html'
})
export class CategoriaComponent implements OnInit {
list = [];
  constructor() { }

  ngOnInit() {
  }

}
