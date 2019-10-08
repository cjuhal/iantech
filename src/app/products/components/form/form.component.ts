import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IStore } from '../../domain/istore';
import { Observable } from 'rxjs';
import { ISelect } from '../../domain/iselect';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input("title") title?: string;
  product$: Observable<ISelect>;
  category$: Observable<ISelect>;
  store$: Observable<ISelect>;
  constructor(public store: Store<IStore>) {
    this.product$ = this.store.select(store => store.select.product);
    this.category$ = this.store.select(store => store.select.category);
    this.store$ = this.store.select(store => store.select.store);
  }

  ngOnInit() {}

}
