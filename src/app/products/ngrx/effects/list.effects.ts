import { LoadItems, ListTypeAction, LoadItemsSuccess, LoadItemsFailure } from '../actions/list.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType} from '@ngrx/effects';
import { ProductsService } from '../../services/products.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ListEffects {
    @Effect() loadItems = this.actions$
    .pipe(
        ofType<LoadItems>(ListTypeAction.LOAD_ITEMS),
        mergeMap(
            ()=> this.productService.getItems()
            .pipe(
                map(data => new LoadItemsSuccess(data)),
                catchError(error => of(new LoadItemsFailure(error)))
                )
            )
        )
    constructor(
        private actions$: Actions,
        private productService : ProductsService
    ){}
}