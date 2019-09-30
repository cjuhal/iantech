import { LoadItems, ProductTypeAction, LoadItemsSuccess, LoadItemsFailure } from '../actions/product.actions';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType} from '@ngrx/effects';
import { ProductsService } from '../../services/products.service';
import { Injectable } from '@angular/core';
import { SelectTypeAction, getProduct, setProduct, getProductSucess, getProductFailure } from '../actions/select.actions';
import { SelectService } from '../../services/select.service';

@Injectable()
export class SelectEffects {
    @Effect() getProduct = this.actions$
    .pipe(
        ofType<getProduct>(SelectTypeAction.GET_PRODUCT),
        mergeMap(
            ()=> this.productService.getItems()
            .pipe(
                map(data => new getProductSucess(data)),
                catchError(error => of(new getProductFailure(error)))
                )
            )
        )
    constructor(
        private actions$: Actions,
        private productService : ProductsService
    ){}
}