import { createReducer, on } from '@ngrx/store';
import { IData } from '../../domain/idata';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../domain/iproduct';
import { ProductTypeAction, ProductAction } from '../actions/product.actions';

export interface ItemState {
  items: Array<IProduct>,
  loading: boolean,
  error: Error
}

const initialState: ItemState = {
  items: [],
  loading: false,
  error: undefined
}


export function ProductReducer(state: ItemState = initialState, action: ProductAction) {
  switch (action.type) {
    case ProductTypeAction.LOAD_ITEMS:
      return { ...state, loading: true }
    case ProductTypeAction.LOAD_ITEMS_SUCCESS:
      return { ...state, items: action.carga, loading: true }
    case ProductTypeAction.LOAD_ITEMS_FAILURE:
      return { ...state, error: action.carga, loading: false }
    case ProductTypeAction.SELECT_PRODUCT:
      return { ...state, items: action.carga, loading: false }
    default:
      return state;
  }
}