import { Action } from '@ngrx/store';
import { IProduct } from '../../domain/iproduct';

export enum ProductTypeAction {
    LOAD_ITEMS = '[ITEMS] Load Items',
    LOAD_ITEMS_SUCCESS = '[ITEMS] Load Items Sucess',
    LOAD_ITEMS_FAILURE = '[ITEMS] Load Items Failure',
    SELECT_PRODUCT = '[PRODUCT] Select Product'
}

export class LoadItems implements Action {
    readonly type = ProductTypeAction.LOAD_ITEMS;

}

export class LoadItemsSuccess implements Action {
    readonly type = ProductTypeAction.LOAD_ITEMS_SUCCESS;
    constructor(public carga: Array<IProduct>) { }
}

export class LoadItemsFailure implements Action {
    readonly type = ProductTypeAction.LOAD_ITEMS_FAILURE;
    constructor(public carga: Error) { }
}



export class SelectProduct implements Action {
    readonly type = ProductTypeAction.SELECT_PRODUCT;
    constructor(public carga: IProduct) { }
}

export type ProductAction =
    | LoadItems
    | LoadItemsSuccess
    | LoadItemsFailure
    | SelectProduct;