import { LoadItems, ListTypeAction, LoadItemsSuccess, LoadItemsFailure } from '../actions/list.actions';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType} from '@ngrx/effects';
import { ProductsService } from '../../services/products.service';
import { Injectable } from '@angular/core';
import { DropdownTypeAction, getProducts, getProductsSucess, getProductsFailure, getCategories, getCategoriesSucess, getCategoriesFailure, getStoresFailure, getStoresSucess, getStores } from '../actions/dropdown.actions';
import { SelectService } from '../../services/select.service';

@Injectable()
export class DropdownEffects {
    @Effect() getProducts = this.actions$
    .pipe(
        ofType<getProducts>(DropdownTypeAction.GET_PRODUCTS),
        mergeMap(
            ()=> this.selectService.getList()
            .pipe(
                map(data => new getProductsSucess(data)),
                catchError(error => of(new getProductsFailure(error)))
                )
            )
        )
        @Effect() getCategories = this.actions$
        .pipe(
            ofType<getCategories>(DropdownTypeAction.GET_CATEGORIES),
            mergeMap(
                ()=> this.selectService.getList()
                .pipe(
                    map(data => new getCategoriesSucess(data)),
                    catchError(error => of(new getCategoriesFailure(error)))
                    )
                )
            )
            @Effect() getStores = this.actions$
            .pipe(
                ofType<getStores>(DropdownTypeAction.GET_STORES),
                mergeMap(
                    ()=> this.selectService.getList()
                    .pipe(
                        map(data => new getStoresSucess(data)),
                        catchError(error => of(new getStoresFailure(error)))
                        )
                    )
                )
    constructor(
        private actions$: Actions,
        private selectService : SelectService
    ){}
}