import { Action, createAction, props } from '@ngrx/store';
import { IProduct } from '../../domain/iproduct';
import { Select } from 'src/app/shared/components/domain/select';

export enum DropdownTypeAction {
    GET_PRODUCTS = '[PRODUCTS] Get Products',
    GET_PRODUCTS_SUCCESS = '[PRODUCTS] Get Products Success',
    GET_STORES = '[STORES] Get Stores',
    GET_STORES_SUCCESS = '[STORES] Get Stores Success',
    GET_CATEGORIES = '[CATEGORIES] Get Categories',
    GET_CATEGORIES_SUCCESS = '[CATEGORIES] Get Categories Success',
    SELECT_PRODUCTS_LOAD_OTHERS = '[PRODUCTS] Select Product',
    SELECT_CATEGORIES_LOAD_OTHERS = '[PRODUCTS] Select Categories',
    SELECT_STORES_LOAD_OTHERS = '[PRODUCTS] Select Stores',
    GET_FAIL = '[OPTIONS] Get Options Fail'
}

export class loadProduct implements Action {
    readonly type = DropdownTypeAction.SELECT_PRODUCTS_LOAD_OTHERS;
    constructor(public payload: Array<IProduct>) {}
}
export class loadCategories implements Action {
    readonly type = DropdownTypeAction.SELECT_CATEGORIES_LOAD_OTHERS;
    constructor(public payload: Array<IProduct>) {}
}
export class loadStore implements Action {
    readonly type = DropdownTypeAction.SELECT_STORES_LOAD_OTHERS;
    constructor(public payload: Array<IProduct>) {}
}

export class getOptions implements Action {
    readonly type;
}

export class getProducts extends getOptions {
    readonly type = DropdownTypeAction.GET_PRODUCTS;
}

export class getCategories extends getOptions  {
    readonly type = DropdownTypeAction.GET_CATEGORIES;
}

export class getStores extends getOptions  {
    readonly type = DropdownTypeAction.GET_STORES;
}

export class getSelect {
    readonly type;
    public list: Array<Select>;
    constructor(public payload: Array<IProduct>) {
        this.filterSelect(this.createSelect);
    }

    filterSelect(callback) {
        this.list = this.payload.map(data => callback(data))
        this.list = this.list.reduce((acu, item) => 
        acu.some(x=> (x.id === item.id || x.value === item.value)) ? acu : [...acu, item], [])

    }
    createSelect(item) {}
}

export class getProductsSucess extends getSelect implements Action {
    readonly type = DropdownTypeAction.GET_PRODUCTS_SUCCESS;
    createSelect(item) {
        return {id:item.id, value:item.product}
    }
}

export class getCategoriesSucess extends getSelect implements Action {
    readonly type = DropdownTypeAction.GET_CATEGORIES_SUCCESS;
    createSelect(item) {
        return {id:item.id, value:item.category}
    }
}

export class getStoresSucess extends getSelect implements Action {
    readonly type = DropdownTypeAction.GET_STORES_SUCCESS;
    createSelect(item) {
        return {id:item.id, value:item.store}
        
    }
}

export class getFailure implements Action {
    readonly type = DropdownTypeAction.GET_FAIL;
    constructor(public payload: Error) {}
}




export type DropdownAction =
    | getProducts
    | getCategories
    | getStores
    | getProductsSucess
    | getCategoriesSucess
    | getStoresSucess
    | loadProduct
    | loadCategories
    | loadStore
    | getFailure