import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../../models/istore';
import { ISelect } from '../../models/iselect';
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
  selected: ISelect;
  disable: boolean;
  constructor(public store: Store<IStore>) {
    this.getOptions();
    this.setValues();
    this.loading$ = this.store.select(store => store.dropdown.loading);
    this.error$ = this.store.select(store => store.dropdown.error);
  }
  ngOnInit() {
    this.title = this.title == undefined ? 'Titulo' : this.title;
  }
  getOptions() { }
  setValues() { }
  selection() { }
}
