import { map, catchError, flatMap, mergeMap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { SelectTypeAction, SelectProduct, SelectFailure, Select } from '../actions/select.actions';
import { of } from 'rxjs';
import { IStore } from '../../domain/istore';
import { Store } from '@ngrx/store';
import { FiltredItems } from '../actions/list.actions';
import { getStoresSucess, getCategoriesSucess, getProductsSucess } from '../actions/dropdown.actions';

@Injectable()
export class SelectEffects {
    @Effect() selectItem = this.actions$
        .pipe(
            ofType<Select>(SelectTypeAction.SELECT_PRODUCT, SelectTypeAction.SELECT_CATEGORY, SelectTypeAction.SELECT_STORE),
            flatMap(action => this.store.select(store => store.list.items)
                .pipe(map(list => { return { list, action } }))),
            mergeMap(({ list, action }) => {

                switch (action.type) {
                    case SelectTypeAction.SELECT_PRODUCT: {
                        let items = list.filter(item => item.product == action.payload.value)
                        return [new getStoresSucess(items), new getCategoriesSucess(items), new FiltredItems(items)]
                    }
                    case SelectTypeAction.SELECT_CATEGORY: {
                        let items = list.filter(item => item.category == action.payload.value)
                        return [new getStoresSucess(items), new getProductsSucess(items), new FiltredItems(items)]
                    }
                    case SelectTypeAction.SELECT_STORE: {
                        let items = list.filter(item => item.store == action.payload.value)
                        return [new getCategoriesSucess(items), new getProductsSucess(items), new FiltredItems(items)]
                    }
                    default: return list;
                }
            }),
            catchError(error => of(new SelectFailure(error)))
        )

    constructor(
        private actions$: Actions,
        private store: Store<IStore>
    ) { }
}