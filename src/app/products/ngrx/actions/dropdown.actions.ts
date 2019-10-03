import { Action, createAction, props } from '@ngrx/store';
import { IProduct } from '../../domain/iproduct';
import { Select } from 'src/app/shared/components/domain/select';

export enum DropdownTypeAction {
    GET_PRODUCTS = '[PRODUCTS] Get Products',
    GET_PRODUCTS_SUCCESS = '[PRODUCTS] Get Products Success',
    GET_PRODUCTS_FAIL = '[PRODUCTS] Get Products Fail',
    GET_STORES = '[STORES] Get Stores',
    GET_STORES_SUCCESS = '[STORES] Get Stores Success',
    GET_STORES_FAIL = '[STORES] Get Stores Fail',
    GET_CATEGORIES = '[CATEGORIES] Get Categories',
    GET_CATEGORIES_SUCCESS = '[CATEGORIES] Get Categories Success',
    GET_CATEGORIES_FAIL = '[CATEGORIES] Get Categories Fail',
    SELECT_PRODUCTS_LOAD_OTHERS = '[PRODUCTS] Select Product',
    SELECT_CATEGORIES_LOAD_OTHERS = '[PRODUCTS] Select Categories',
    SELECT_STORES_LOAD_OTHERS = '[PRODUCTS] Select Stores'
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

export class getProducts implements Action {
    readonly type = DropdownTypeAction.GET_PRODUCTS;
}

export class getCategories implements Action {
    readonly type = DropdownTypeAction.GET_CATEGORIES;
}

export class getStores implements Action {
    readonly type = DropdownTypeAction.GET_STORES;
}

export class getSelect {
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

/*
export class SelectDropdown implements Action {
    list: Array<Select>;
    constructor(public payload: Array<IProduct>, select: ISelect) {
        this.payload = this.payload.filter(item => item.store = select.value );
        this.payload = this.payload.reduce((acu, item) => 
        acu.some(x=> (x.id === select.id || x.value === select.value)) ? acu : [...acu, item], [])
    }
}
*/
export class getProductsSucess extends getSelect implements Action {
    readonly type = DropdownTypeAction.GET_PRODUCTS_SUCCESS;
    //public payload: Array<IProduct>;
    public list: Array<Select>;
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
    //public payload: Array<IProduct>;
    createSelect(item) {
        return {id:item.id, value:item.store}
        
    }
}



export class getProductsFailure implements Action {
    readonly type = DropdownTypeAction.GET_PRODUCTS_FAIL;
    payload: Error;
    constructor(public payload_: Error) {
        this.payload = payload_
    }
}

export class getCategoriesFailure implements Action {
    readonly type = DropdownTypeAction.GET_CATEGORIES_FAIL;
    payload: Error;
    constructor(public payload_: Error) {
        this.payload = payload_
    }
}

export class getStoresFailure implements Action {
    readonly type = DropdownTypeAction.GET_STORES_FAIL;
    payload: Error;
    constructor(public payload_: Error) {
        this.payload = payload_
    }
}



export type DropdownAction =
    | getProducts
    | getCategories
    | getStores
    | getProductsSucess
    | getProductsFailure
    | getCategoriesSucess
    | getCategoriesFailure
    | getStoresSucess
    | getStoresFailure
    | loadProduct
    | loadCategories
    | loadStore