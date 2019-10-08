import { Action } from '@ngrx/store';
import { IProduct } from '../../models/iproduct';

export enum ListTypeAction {
    LOAD_ITEMS = '[ITEMS] Load Items',
    LOAD_ITEMS_SUCCESS = '[ITEMS] Load Items Success',
    LOAD_ITEMS_FAILURE = '[ITEMS] Load Items Failure',
    FILTRED_ITEMS = '[ITEMS] Filtred Items',
    FILTRED_ITEMS_SUCCESS = '[ITEMS] Filtred Items Success',
    FILTRED_ITEMS_FAIL = '[ITEMS] Filtred Items Failure',
}

export class LoadItems implements Action {
    readonly type = ListTypeAction.LOAD_ITEMS;

}

export class LoadItemsSuccess implements Action {
    readonly type = ListTypeAction.LOAD_ITEMS_SUCCESS;
    constructor(public payload: Array<IProduct>) { }
}

export class LoadItemsFailure implements Action {
    readonly type = ListTypeAction.LOAD_ITEMS_FAILURE;
    constructor(public payload: Error) { }
}

export class FiltredItems implements Action {
    readonly type = ListTypeAction.FILTRED_ITEMS;
    constructor(public payload: Array<IProduct>) { }
}

export class FiltredItemsSuccess implements Action {
    readonly type = ListTypeAction.FILTRED_ITEMS_SUCCESS;
    constructor(public payload: Array<IProduct>) { }
}

export class FiltredItemsFailure implements Action {
    readonly type = ListTypeAction.FILTRED_ITEMS_FAIL;
    constructor(public payload: Error) { }
}

export type ListAction =
    | LoadItems
    | LoadItemsSuccess
    | LoadItemsFailure
    | FiltredItems
    | FiltredItemsSuccess
    | FiltredItemsFailure