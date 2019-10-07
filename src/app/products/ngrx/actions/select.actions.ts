import { Action, createAction, props } from '@ngrx/store';
import { ISelect } from '../../domain/iselect';

export enum SelectTypeAction {
    SELECT_PRODUCT = '[PRODUCT] Select Product',
    SELECT_CATEGORY = '[CATEGORY] Select Category',
    SELECT_STORE = '[STORE] Select Store',
    SELECT_FAIL = '[PRODUCT] Select Fail'
}
export class Select implements Action{
    readonly type;
    constructor(public payload: ISelect){}
}
export class SelectProduct extends Select {
    readonly type = SelectTypeAction.SELECT_PRODUCT;
}

export class SelectCategory extends Select {
    readonly type = SelectTypeAction.SELECT_CATEGORY;
}

export class SelectStore extends Select{
    readonly type = SelectTypeAction.SELECT_STORE;
}

export class SelectFailure implements Action{
    readonly type = SelectTypeAction.SELECT_FAIL;
    constructor(public error: Error){}
}

export type SelectAction =
    | SelectProduct
    | SelectCategory
    | SelectStore
    | SelectFailure