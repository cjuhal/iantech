import { Action, createAction, props } from '@ngrx/store';
import { ISelect } from '../../domain/iselect';

export enum SelectTypeAction {
    SELECT_PRODUCT = '[PRODUCT] Select Product',
    SELECT_CATEGORY = '[CATEGORY] Select Category',
    SELECT_STORE = '[STORE] Select Store',
    SELECT_PRODUCT_FAIL = '[PRODUCT] Select Product Fail'
}

export class SelectProduct implements Action {
    readonly type = SelectTypeAction.SELECT_PRODUCT;
    constructor(public payload: ISelect){}
}

export class SelectCategory implements Action {
    readonly type = SelectTypeAction.SELECT_CATEGORY;
    constructor(public payload: ISelect){}
}

export class SelectStore implements Action {
    readonly type = SelectTypeAction.SELECT_STORE;
    constructor(public payload: ISelect){}
}

export class SelectProductFailure implements Action{
    readonly type = SelectTypeAction.SELECT_PRODUCT_FAIL;
    constructor(public error: Error){}
}

export type SelectAction =
    | SelectProduct
    | SelectCategory
    | SelectStore
    | SelectProductFailure