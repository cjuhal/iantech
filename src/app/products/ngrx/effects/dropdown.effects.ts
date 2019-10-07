import { mergeMap, catchError, flatMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType} from '@ngrx/effects';
import { ProductsService } from '../../services/products.service';
import { Injectable } from '@angular/core';
import { DropdownTypeAction, getProductsSucess, getCategoriesSucess, getStoresSucess, getFailure, getSelect } from '../actions/dropdown.actions';
import { IProduct } from './../../domain/iproduct';

@Injectable()
export class DropdownEffects {
    @Effect() getOptions = this.actions$
    .pipe(
        ofType<getSelect>(DropdownTypeAction.GET_PRODUCTS,DropdownTypeAction.GET_CATEGORIES, DropdownTypeAction.GET_STORES),
        flatMap(action => this.productsService.getList()
        .pipe(
            map(list=> {return {list,action}}))),
        mergeMap(
            ({list,action})=> {
                switch (action.type) {
                    case DropdownTypeAction.GET_PRODUCTS: {
                        return new getProductsSucess(list)
                    }
                    case DropdownTypeAction.GET_CATEGORIES: {
                        return new getCategoriesSucess(list)
                    }
                    case DropdownTypeAction.GET_STORES: {
                        return new getStoresSucess(list)
                    }
                    default: return list;
                }
            }), catchError(error => of(new getFailure(error)))
        )
    constructor(
        private actions$: Actions,
        private productsService : ProductsService
    ){}
}