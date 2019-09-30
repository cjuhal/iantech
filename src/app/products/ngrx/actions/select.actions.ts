import { Action, createAction, props } from '@ngrx/store';
import { ISelect } from '../../domain/iselect';
import { IProduct } from '../../domain/iproduct';
import { Select } from 'src/app/shared/components/domain/select';

export enum SelectTypeAction {
    GET_PRODUCT = '[PRODUCT] Get Product',
    GET_PRODUCT_SUCCESS = '[PRODUCT] Get Product Success',
    GET_PRODUCT_FAIL = '[PRODUCT] Get Product Fail',
    GET_STORE = '[STORE] Get Product',
    GET_CATEGORY = '[CATEGORY] Get Product',
    SET_PRODUCT = '[PRODUCT] Set Product'
}

export class getProduct implements Action {
    readonly type = SelectTypeAction.GET_PRODUCT;
}

export class getProductSucess implements Action {
    readonly type = SelectTypeAction.GET_PRODUCT_SUCCESS;
    //public carga: Array<IProduct>;
    public list: Array<Select>;
    constructor(public carga: Array<IProduct>) {
        this.filterSelect();
    }

    filterSelect() {
        this.list = this.carga.map(data => this.createSelect(data))
    }
    createSelect(item) {
        return new Select(item.id, item.product)
    }
}

export class getProductFailure implements Action {
    readonly type = SelectTypeAction.GET_PRODUCT_FAIL;
    carga: Error;
    constructor(public carga_: Error) {
        this.carga = carga_
    }
}

export class setProduct implements Action {
    readonly type = SelectTypeAction.GET_PRODUCT;
    carga: Array<IProduct>;
    list: Array<Select>;
    select: ISelect;
    constructor(public carga_: Array<IProduct>, select_: ISelect) {
        this.carga = carga_
        this.select = select_;
        this.filterSelect();
    }

    filterSelect() {
        this.list = this.carga.map(data => this.createSelect(data))
    }
    createSelect(item) {
        return new Select(item.id, item.product)
    }
}


export class getStore implements Action {
    readonly type = SelectTypeAction.GET_STORE;
    constructor(public carga: ISelect) { }
}

export class getCategory implements Action {
    readonly type = SelectTypeAction.GET_CATEGORY;
    constructor(public carga: ISelect) { }
}

export type SelectAction =
    | getProduct
    | getCategory
    | getStore
    | setProduct
    | getProductSucess
    | getProductFailure