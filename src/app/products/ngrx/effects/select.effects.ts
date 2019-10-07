import { map, catchError, flatMap, mergeMap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { SelectTypeAction, SelectProduct, SelectFailure, Select } from '../actions/select.actions';
import { of } from 'rxjs';
import { IStore } from '../../domain/istore';
import { Store } from '@ngrx/store';
import { FiltredItems } from '../actions/list.actions';
import { getStoresSucess, getCategoriesSucess } from '../actions/dropdown.actions';

@Injectable()
export class SelectEffects {
    @Effect() selectItem = this.actions$
        .pipe(
            ofType<Select>(SelectTypeAction.SELECT_PRODUCT,SelectTypeAction.SELECT_CATEGORY,SelectTypeAction.SELECT_STORE),
            flatMap(action => this.store.select(store => store.list.items)
                .pipe(map(list => {return {list, action}}))),
            map(({list,action})=> {

            switch(action.type){
                case SelectTypeAction.SELECT_PRODUCT:
                    return list.filter(item => item.product == action.payload.value)
                case SelectTypeAction.SELECT_CATEGORY:
                    return list.filter(item => item.category == action.payload.value)
                case SelectTypeAction.SELECT_STORE:
                    return list.filter(item => item.store == action.payload.value)
                    default: return list;
                }
            }),
            mergeMap(list => {
                return [ new getStoresSucess(list),new getCategoriesSucess(list), new FiltredItems(list)]
            }),
                catchError(error => of(new SelectFailure(error)))
        )

    constructor(
        private actions$: Actions,
        private store: Store<IStore>
    ) { }
}