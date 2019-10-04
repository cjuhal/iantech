import { Action } from '@ngrx/store';
import { IProduct } from '../../domain/iproduct';
import { IData } from '../../domain/idata';

export enum ListTypeAction {
    LOAD_ITEMS = '[ITEMS] Load Items',
    LOAD_ITEMS_SUCCESS = '[ITEMS] Load Items Sucess',
    LOAD_ITEMS_FAILURE = '[ITEMS] Load Items Failure',
    SELECT_PRODUCT = '[PRODUCT] Select Product'
}

export class LoadItems implements Action {
    readonly type = ListTypeAction.LOAD_ITEMS;

}

export class LoadItemsSuccess implements Action {
    readonly type = ListTypeAction.LOAD_ITEMS_SUCCESS;
    constructor(public payload: Array<IProduct>){
        
    }
}

export class LoadItemsFailure implements Action {
    readonly type = ListTypeAction.LOAD_ITEMS_FAILURE;
    constructor(public payload: Error) { }
}


export type ListAction =
    | LoadItems
    | LoadItemsSuccess
    | LoadItemsFailure