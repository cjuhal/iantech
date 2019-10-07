
import { IProduct } from '../../domain/iproduct';
import { ListTypeAction, ListAction } from '../actions/list.actions';

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


export function ListReducer(state: ItemState = initialState, action: ListAction) {
  switch (action.type) {
    case ListTypeAction.LOAD_ITEMS:
      return { ...state, loading: true }
    case ListTypeAction.LOAD_ITEMS_SUCCESS:
      return { ...state, items: action.payload, loading: true }
    case ListTypeAction.LOAD_ITEMS_FAILURE:
      return { ...state, error: action.payload, loading: false }
    case ListTypeAction.FILTRED_ITEMS:
      return { ...state, items: action.payload, loading: true }
    case ListTypeAction.FILTRED_ITEMS:
      return { ...state, loading: true }
    case ListTypeAction.FILTRED_ITEMS_SUCCESS:
      return { ...state, items: action.payload, loading: true }
    case ListTypeAction.FILTRED_ITEMS_FAIL:
      return { ...state, error: action.payload, loading: false }
    default:
      return state;
  }
}