import { Action, createAction, props } from '@ngrx/store';
import { ISelect } from '../../domain/iselect';
import { IProduct } from './../../domain/iproduct';

export enum SelectTypeAction {
    SELECT_PRODUCT = '[PRODUCT] Select Product',
    SELECT_CATEGORY = '[CATEGORY] Select Category',
    SELECT_STORE = '[STORE] Select Store',
    SELECT_FAIL = '[PRODUCT] Select Fail'
}
export class Select implements Action{
    readonly type;
    constructor(public payload: ISelect){
        console.log(payload);
    }
}

export class SelectFailure implements Action{
    readonly type = SelectTypeAction.SELECT_FAIL;
    constructor(public error: Error){}
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

export type SelectAction =
    | SelectProduct
    | SelectCategory
    | SelectStore
    | SelectFailure