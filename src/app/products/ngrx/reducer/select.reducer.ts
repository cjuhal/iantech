import { ISelect } from '../../domain/iselect'
import { SelectAction, SelectTypeAction } from '../actions/select.actions'
import { IProduct } from '../../domain/iproduct'

export interface SelectState {
    items: Array<ISelect>,
    loading: boolean,
    error: Error
}

const initialState: SelectState = {
    items: [],
    loading: false,
    error: undefined
}


export function SelectReducer(state: SelectState = initialState, action: SelectAction) {
    switch (action.type) {
        case SelectTypeAction.GET_STORE:
            return { ...state, items: action.carga, loading: false }
        case SelectTypeAction.GET_CATEGORY:
            return { ...state, items: action.carga, loading: false }
        case SelectTypeAction.GET_PRODUCT:
            return { ...state, loading: true }
        case SelectTypeAction.GET_PRODUCT_SUCCESS:
            return { ...state, items: action.list, loading: true }
        case SelectTypeAction.GET_PRODUCT_FAIL:
            return { ...state, error: action.carga, loading: true }
        default:
            return state;
    }
}