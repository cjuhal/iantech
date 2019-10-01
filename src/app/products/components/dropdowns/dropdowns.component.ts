import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../../domain/istore';
import { ISelect } from '../../domain/iselect';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.scss']
})
export class DropdownsComponent implements OnInit {
  @Input("title") title?: string;
  list$: Observable<Array<ISelect>>;
  loading$: Observable<boolean>;
  error$: Observable<Error>;
  selected: string;
  disable: boolean;
  constructor(public store: Store<IStore>) {
    this.getOptions();
    this.setValues();
    this.loading$ = this.store.select(store =>store.select.loading);
    this.error$ = this.store.select(store =>store.select.error);
   }
  ngOnInit() {
    this.title = this.title == undefined ? 'Titulo' : this.title;
    this.selected = "0";
  }
  getOptions(){}
  setValues(){}
  selection(){}
}
