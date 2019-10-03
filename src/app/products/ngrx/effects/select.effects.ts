import { tap, switchMap, map, catchError, mapTo, concatMap, concatMapTo, mergeMap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { SelectTypeAction, SelectProduct, SelectProductFailure, SelectProductSuccess } from '../actions/select.actions';
import { of } from 'rxjs';
import { SelectService } from '../../services/select.service';

@Injectable()
export class SelectEffects {
    @Effect() selectItem = this.actions$
        .pipe(
            ofType<SelectProduct>(SelectTypeAction.SELECT_PRODUCT),
            tap(action => {
                console.log(action);
              }),
            mergeMap(action => this.selectService.selectProduct(action.payload)
                .pipe(
                    map(() => new SelectProductSuccess(action.payload)),
                    catchError(error => of(new SelectProductFailure(error)))
                )
            ),
        )
    constructor(
        private actions$: Actions,
        private selectService: SelectService
    ) { }
}