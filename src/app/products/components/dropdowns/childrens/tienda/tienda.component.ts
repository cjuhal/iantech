import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'select-tienda',
  templateUrl: '../../dropdowns.component.html'
})
export class TiendaComponent implements OnInit {
  list = [];
  constructor() { }

  ngOnInit() {
  }

}
