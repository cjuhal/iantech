import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../../domain/istore';
import { ISelect } from '../../domain/iselect';
import { Observable } from 'rxjs';
import { Select } from 'src/app/shared/components/domain/select';
import { SelectService } from '../../services/select.service';
import { SelectProduct } from '../../ngrx/actions/select.actions';

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
  constructor(public store: Store<IStore>, public selectService: SelectService) {
    this.getOptions();
    this.setValues();
    this.loading$ = this.store.select(store =>store.dropdown.loading);
    this.error$ = this.store.select(store =>store.dropdown.error);
   }
  ngOnInit() {
    this.title = this.title == undefined ? 'Titulo' : this.title;
  }
  getOptions(){}
  setValues(){}
  selection(){
    this.store.dispatch(new SelectProduct(this.selected));
  }
}
