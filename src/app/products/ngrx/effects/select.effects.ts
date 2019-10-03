import { tap, switchMap, map, catchError, mapTo, concatMap, concatMapTo, mergeMap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { SelectTypeAction, SelectProduct, SelectProductFailure, SelectProductSuccess, SelectStoreFailure, SelectStoreSuccess, SelectStore, SelectCategoryFailure, SelectCategorySuccess, SelectCategory } from '../actions/select.actions';
import { of } from 'rxjs';
import { SelectService } from '../../services/select.service';

@Injectable()
export class SelectEffects {
    @Effect() selectItem = this.actions$
        .pipe(
            ofType<SelectProduct>(SelectTypeAction.SELECT_PRODUCT),
            map(action => new SelectProductSuccess(action.payload)),
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
    ) { }
}