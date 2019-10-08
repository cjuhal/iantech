import { SelectAction, SelectTypeAction } from './select.actions';
import { ISelect } from '../../models/iselect';

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
      return { ...state, product: action.payload, loading: true }
    case SelectTypeAction.SELECT_CATEGORY:
      return { ...state, category: action.payload, loading: true }
    case SelectTypeAction.SELECT_STORE:
      return { ...state, store: action.payload, loading: true }
      case SelectTypeAction.SELECT_FAIL:
        return {...state, error: action.error, loading: false}
        case SelectTypeAction.RESET:
        return initialState;
    default:
      return state;
  }

}