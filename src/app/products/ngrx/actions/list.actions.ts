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
    list: Array<IProduct>;
    constructor(public carga: Array<IData>){
        this.list = carga.flatMap(item => 
            item.store.map(
                store_ => { return {id:item.id, product: item.product, category:item.category, img: item.img, store: store_}
                })
            )
    }
}

export class LoadItemsFailure implements Action {
    readonly type = ListTypeAction.LOAD_ITEMS_FAILURE;
    constructor(public carga: Error) { }
}


export type ListAction =
    | LoadItems
    | LoadItemsSuccess
    | LoadItemsFailure