import { LoadItems, ProductTypeAction, LoadItemsSuccess, LoadItemsFailure } from '../actions/product.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType} from '@ngrx/effects';
import { ProductsService } from '../../services/products.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductEffects {
    @Effect() loadItems = this.actions$
    .pipe(
        ofType<LoadItems>(ProductTypeAction.LOAD_ITEMS),
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