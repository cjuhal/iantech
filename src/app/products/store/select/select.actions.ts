import { Action, createAction, props } from '@ngrx/store';
import { ISelect } from '../../models/iselect';

export enum SelectTypeAction {
    SELECT_PRODUCT = '[PRODUCT] Select Product',
    SELECT_CATEGORY = '[CATEGORY] Select Category',
    SELECT_STORE = '[STORE] Select Store',
    SELECT_FAIL = '[PRODUCT] Select Fail',
    RESET = '[RESET] Reset All'
}

export class Select implements Action {
    readonly type;
    constructor(public payload: ISelect) { }
}
export class SelectFailure implements Action {
    readonly type = SelectTypeAction.SELECT_FAIL;
    constructor(public error: Error) { }
}

export class ResetSelects implements Action {
    readonly type = SelectTypeAction.RESET;
    public payload = undefined;
}

export class SelectProduct extends Select {
    readonly type = SelectTypeAction.SELECT_PRODUCT;
}

export class SelectCategory extends Select {
    readonly type = SelectTypeAction.SELECT_CATEGORY;
}

export class SelectStore extends Select {
    readonly type = SelectTypeAction.SELECT_STORE;
}

export type SelectAction =
    | SelectProduct
    | SelectCategory
    | SelectStore
    | SelectFailure
    | ResetSelects