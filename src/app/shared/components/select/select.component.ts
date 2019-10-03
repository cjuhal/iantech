import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ISelect } from 'src/app/products/domain/iselect';
import { IStore } from 'src/app/products/domain/istore';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input("list") list: Array<any>;
  @Input("title") title?: string;
  list$: Observable<Array<ISelect>>;
  loading$: Observable<boolean>;
  error$: Observable<Error>;
  selected: string;
  disable: boolean;
  constructor(public store: Store<IStore>) {
    this.getOptions();
    this.setValues();
   }
  ngOnInit() {
    this.title == undefined ? 'Titulo' : this.title;
    this.selected = "0";
  }
  getOptions(){}
  setValues(){}
  selection(){}
}
