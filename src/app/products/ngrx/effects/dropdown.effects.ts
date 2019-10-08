import { mergeMap, catchError, flatMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType} from '@ngrx/effects';
import { ProductsService } from '../../services/products.service';
import { Injectable } from '@angular/core';
import { DropdownTypeAction, getProductsSucess, getCategoriesSucess, getStoresSucess, getFailure, getSelect, getOptions, getCategories, getProducts, getStores } from '../actions/dropdown.actions';
import { IProduct } from './../../domain/iproduct';
import { SelectTypeAction } from '../actions/select.actions';

@Injectable()
export class DropdownEffects {
    @Effect() getOptions = this.actions$
    .pipe(
        ofType<getOptions>(DropdownTypeAction.GET_PRODUCTS,DropdownTypeAction.GET_CATEGORIES, DropdownTypeAction.GET_STORES),
        mergeMap(action => 
            this.productsService.getList().pipe( 
                map(list =>{
                switch (action.type) {
                    case DropdownTypeAction.GET_PRODUCTS: {
                        let items = this.filterSelect(list, function(item){return {id:item.id, value:item.product}})
                        return new getProductsSucess(items)
                    }
                    case DropdownTypeAction.GET_CATEGORIES: {
                        let items = this.filterSelect(list, function(item){return {id:item.id, value:item.category}})
                        return new getCategoriesSucess(items)
                    }
                    case DropdownTypeAction.GET_STORES: {
                        let items = this.filterSelect(list, function(item){return {id:item.id, value:item.store}})
                        return new getStoresSucess(items)
                    }
                    default: return list;
                }
            }))), catchError(error => of(new getFailure(error)))
        )

    constructor(
        private actions$: Actions,
        private productsService : ProductsService
    ){}

    filterSelect(lista,callback) {
        let listAux = lista.map(data => callback(data))
        return listAux.reduce((acu, item) => 
        acu.some(x=> (x.value === item.value)) ? acu : [...acu, item], [])

    }
}