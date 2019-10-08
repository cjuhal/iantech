import { LoadItems, ListTypeAction, LoadItemsSuccess, LoadItemsFailure, FiltredItems, FiltredItemsSuccess, FiltredItemsFailure } from '../actions/list.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductsService } from '../../services/products.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ListEffects {
    @Effect() loadItems = this.actions$
        .pipe(
            ofType<LoadItems>(ListTypeAction.LOAD_ITEMS),
            mergeMap(() => this.productService.getItems()
                .pipe(
                    map(items => {
                    let list = this.converItemsToProducts(items)
                    return new LoadItemsSuccess(list)
                    }),
                    catchError(error => of(new LoadItemsFailure(error)))
                    )
            )
        )

    @Effect() filtredItems = this.actions$
        .pipe(
            ofType<FiltredItems>(ListTypeAction.FILTRED_ITEMS),
            map(action => new FiltredItemsSuccess(action.payload)),
            catchError(error => of(new FiltredItemsFailure(error)))
        )
    constructor(
        private actions$: Actions,
        private productService: ProductsService
    ) { }
    converItemsToProducts(items){
        return items.flatMap(item => 
                item.store.map(store_ => {
                    return { id: item.id, product: item.product, category: item.category, img: item.img, store: store_ }
                    })
                )
    }
}