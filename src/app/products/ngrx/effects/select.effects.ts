import { tap, switchMap, map, catchError, mapTo, concatMap, concatMapTo, mergeMap, filter } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { SelectTypeAction, SelectProduct, SelectStore, SelectCategory, SelectProductFailure } from '../actions/select.actions';
import { of } from 'rxjs';
import { SelectService } from '../../services/select.service';
import { IStore } from '../../domain/istore';
import { Store } from '@ngrx/store';
import { LoadItemsSuccess } from '../actions/list.actions';
import { getStoresSucess, getCategoriesSucess } from '../actions/dropdown.actions';
import { ProductsService } from '../../services/products.service';

@Injectable()
export class SelectEffects {
    @Effect() selectItem = this.actions$
        .pipe(
            ofType<SelectProduct>(SelectTypeAction.SELECT_PRODUCT),
            switchMap(action => this.productService.getList()
                .pipe(
                    map(data => data.filter(item => item.product == action.payload.value)),
                    map(list => new LoadItemsSuccess(list))
                    //switchMap(list => [new LoadItemsSuccess(list), new getStoresSucess(list),new getCategoriesSucess(list)])
                )
            ),
                catchError(error => of(new SelectProductFailure(error)))
            )
    /* @Effect() selectCategory = this.actions$
     .pipe(
         ofType<SelectCategory>(SelectTypeAction.SELECT_CATEGORY),
         map(action => new SelectCategorySuccess(action.payload)),
         catchError(error => of(new SelectCategoryFailure(error)))
     )
     @Effect() selectStore = this.actions$
     .pipe(
         ofType<SelectStore>(SelectTypeAction.SELECT_STORE),
         map(action => new SelectStoreSuccess(action.payload)),
         catchError(error => of(new SelectStoreFailure(error)))
     )*/
    constructor(
        private actions$: Actions,
        private store: Store<IStore>,
        private productService: ProductsService
    ) { }
}