import { SelectAction, SelectTypeAction } from '../actions/select.actions';
import { ISelect } from '../../domain/iselect';

export interface SelectState {
  product: ISelect,
  category: ISelect,
  store: ISelect
  loading: boolean
}

const initialState: SelectState = {
  product: undefined,
  category: undefined,
  store: undefined,
  loading: false
}

export function SelectReducer(state: SelectState = initialState, action: SelectAction) {
  switch (action.type) {
    case SelectTypeAction.SELECT_PRODUCT:
      return { ...state, loading: true }
    case SelectTypeAction.SELECT_PRODUCT_SUCCESS:
      return { ...state, product: action.payload, loading: true }
    case SelectTypeAction.SELECT_PRODUCT_FAIL:
      return { ...state, error: action.error, loading: false }
    case SelectTypeAction.SELECT_CATEGORY:
      return { ...state, loading: true }
    case SelectTypeAction.SELECT_CATEGORY_SUCCESS:
      return { ...state, category: action.payload, loading: true }
    case SelectTypeAction.SELECT_CATEGORY_FAIL:
      return { ...state, error: action.error, loading: false }
    case SelectTypeAction.SELECT_STORE:
      return { ...state, loading: true }
    case SelectTypeAction.SELECT_STORE_SUCCESS:
      return { ...state, store: action.payload, loading: true }
    case SelectTypeAction.SELECT_STORE_FAIL:
      return { ...state, error: action.error, loading: false }
    default:
      return state;
  }

}