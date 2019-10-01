import { Action, createAction, props } from '@ngrx/store';
import { ISelect } from '../../domain/iselect';
import { IProduct } from '../../domain/iproduct';
import { Select } from 'src/app/shared/components/domain/select';

export enum SelectTypeAction {
    GET_PRODUCTS = '[PRODUCTS] Get Products',
    GET_PRODUCTS_SUCCESS = '[PRODUCTS] Get Products Success',
    GET_PRODUCTS_FAIL = '[PRODUCTS] Get Products Fail',
    GET_STORES = '[STORES] Get Stores',
    GET_STORES_SUCCESS = '[STORES] Get Stores Success',
    GET_STORES_FAIL = '[STORES] Get Stores Fail',
    GET_CATEGORIES = '[CATEGORIES] Get Categories',
    GET_CATEGORIES_SUCCESS = '[CATEGORIES] Get Categories Success',
    GET_CATEGORIES_FAIL = '[CATEGORIES] Get Categories Fail',
    SET_PRODUCTS = '[PRODUCTS] Set Product'
}

export class getProducts implements Action {
    readonly type = SelectTypeAction.GET_PRODUCTS;
}

export class getCategories implements Action {
    readonly type = SelectTypeAction.GET_CATEGORIES;
}

export class getStores implements Action {
    readonly type = SelectTypeAction.GET_STORES;
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

export class getProductsSucess extends getSelect implements Action {
    readonly type = SelectTypeAction.GET_PRODUCTS_SUCCESS;
    //public payload: Array<IProduct>;
    public list: Array<Select>;
    createSelect(item) {
        return new Select(item.id, item.product)
    }
}

export class getCategoriesSucess extends getSelect implements Action {
    readonly type = SelectTypeAction.GET_CATEGORIES_SUCCESS;
    createSelect(item) {
        return new Select(item.id, item.category)
    }
}

export class getStoresSucess extends getSelect implements Action {
    readonly type = SelectTypeAction.GET_STORES_SUCCESS;
    //public payload: Array<IProduct>;
    createSelect(item) {
        return new Select(item.id, item.store)
    }
}



export class getProductsFailure implements Action {
    readonly type = SelectTypeAction.GET_PRODUCTS_FAIL;
    payload: Error;
    constructor(public payload_: Error) {
        this.payload = payload_
    }
}

export class getCategoriesFailure implements Action {
    readonly type = SelectTypeAction.GET_CATEGORIES_FAIL;
    payload: Error;
    constructor(public payload_: Error) {
        this.payload = payload_
    }
}

export class getStoresFailure implements Action {
    readonly type = SelectTypeAction.GET_STORES_FAIL;
    payload: Error;
    constructor(public payload_: Error) {
        this.payload = payload_
    }
}

export class setProducts implements Action {
    readonly type = SelectTypeAction.GET_PRODUCTS;
    payload: Array<IProduct>;
    list: Array<Select>;
    select: ISelect;
    constructor(public payload_: Array<IProduct>, select_: ISelect) {
        this.payload = payload_
        this.select = select_;
        this.filterSelect();
    }

    filterSelect() {
        this.list = this.payload.map(data => this.createSelect(data))
    }
    createSelect(item) {
        return new Select(item.id, item.product)
    }
}


export type SelectAction =
    | getProducts
    | getCategories
    | getStores
    | getProductsSucess
    | getProductsFailure
    | getCategoriesSucess
    | getCategoriesFailure
    | getStoresSucess
    | getStoresFailure
    | setProducts