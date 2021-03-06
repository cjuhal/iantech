import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IStore } from '../../models/istore';
import { Observable } from 'rxjs';
import { ISelect } from '../../models/iselect';
import { LoadItems } from '../../store/list/list.actions';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ResetSelects } from '../../store/select/select.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  product$: Observable<ISelect>;
  category$: Observable<ISelect>;
  store$: Observable<ISelect>;
  faCoffee = faCoffee;
  constructor(public store: Store<IStore>) {
    this.product$ = this.store.select(store => store.select.product);
    this.category$ = this.store.select(store => store.select.category);
    this.store$ = this.store.select(store => store.select.store);
  }
  allItems() {
    this.store.dispatch(new LoadItems());
    this.store.dispatch(new ResetSelects());
  }
  ngOnInit() { }

}
