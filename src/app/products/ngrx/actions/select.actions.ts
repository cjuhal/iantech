import { Action, createAction, props } from '@ngrx/store';
import { ISelect } from '../../domain/iselect';

export enum SelectTypeAction {
    SELECT_PRODUCT = '[PRODUCT] Select Product',
    SELECT_PRODUCT_SUCCESS = '[PRODUCT] Select Product Success',
    SELECT_PRODUCT_FAIL = '[PRODUCT] Select Product Fail',
    SELECT_CATEGORY = '[CATEGORY] Select Category',
    SELECT_STORE = '[STORE] Select Store'
}

export class SelectProduct implements Action {
    readonly type = SelectTypeAction.SELECT_PRODUCT;
    constructor(public payload: ISelect){}
}

export class SelectProductSuccess implements Action {
    readonly type = SelectTypeAction.SELECT_PRODUCT_SUCCESS;
    constructor(public payload: ISelect){}
}

export class SelectProductFailure implements Action {
    readonly type = SelectTypeAction.SELECT_PRODUCT_FAIL;
    constructor(public error: Error){}
}

export class SelectCategory implements Action {
    readonly type = SelectTypeAction.SELECT_CATEGORY;
    constructor(public payload: ISelect){}
}

export class SelectStore implements Action {
    readonly type = SelectTypeAction.SELECT_STORE;
    constructor(public payload: ISelect){}
}

export type SelectAction =
    | SelectProduct
    | SelectCategory
    | SelectStore
    | SelectProductFailure
    | SelectProductSuccess