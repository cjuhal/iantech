import { Action } from '@ngrx/store';
import { IProduct } from '../../models/iproduct';

export enum DropdownTypeAction {
    GET_PRODUCTS = '[PRODUCTS] Get Products',
    GET_CATEGORIES = '[CATEGORIES] Get Categories',
    GET_STORES = '[STORES] Get Stores',
    GET_PRODUCTS_SUCCESS = '[PRODUCTS] Get Products Success',
    GET_STORES_SUCCESS = '[STORES] Get Stores Success',
    GET_CATEGORIES_SUCCESS = '[CATEGORIES] Get Categories Success',
    GET_FAIL = '[OPTIONS] Get Options Fail'
}


export class getOptions implements Action {
    readonly type;
}

export class getProducts extends getOptions {
    readonly type = DropdownTypeAction.GET_PRODUCTS;
}

export class getCategories extends getOptions {
    readonly type = DropdownTypeAction.GET_CATEGORIES;
}

export class getStores extends getOptions {
    readonly type = DropdownTypeAction.GET_STORES;
}

export class getSelect {
    readonly type;
    constructor(public payload: Array<IProduct>) { }
}

export class getProductsSucess extends getSelect implements Action {
    readonly type = DropdownTypeAction.GET_PRODUCTS_SUCCESS;
}

export class getCategoriesSucess extends getSelect implements Action {
    readonly type = DropdownTypeAction.GET_CATEGORIES_SUCCESS;
}

export class getStoresSucess extends getSelect implements Action {
    readonly type = DropdownTypeAction.GET_STORES_SUCCESS;
}

export class getFailure implements Action {
    readonly type = DropdownTypeAction.GET_FAIL;
    constructor(public payload: Error) { }
}

export type DropdownAction =
    | getProducts
    | getCategories
    | getStores
    | getProductsSucess
    | getCategoriesSucess
    | getStoresSucess
    | getFailure