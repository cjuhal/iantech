import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IStore } from '../../domain/istore';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input("title") title?: string;
  SELECTED = "0";
  myForm: FormGroup = new FormGroup({
    products: new FormControl(this.SELECTED),
    categories: new FormControl(this.SELECTED),
    store: new FormControl(this.SELECTED),
  });
  constructor(public store: Store<IStore>) {}

  ngOnInit() {
  }

}
