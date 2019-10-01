import { ISelect } from '../../domain/iselect'
import { SelectAction, SelectTypeAction } from '../actions/select.actions'
import { IProduct } from '../../domain/iproduct'

export interface SelectState {
    products: Array<ISelect>,
    categories: Array<ISelect>,
    stores: Array<ISelect>,
    loading: boolean,
    error: Error
}

const initialState: SelectState = {
    products: [],
    categories: [],
    stores: [],
    loading: false,
    error: undefined
}


export function SelectReducer(state: SelectState = initialState, action: SelectAction) {
    switch (action.type) {
        case SelectTypeAction.GET_PRODUCTS:
            return { ...state, loading: false }
        case SelectTypeAction.GET_PRODUCTS_SUCCESS:
            return { ...state, products: action.list, loading: true }
        case SelectTypeAction.GET_PRODUCTS_FAIL:
            return { ...state, error: action.payload, loading: false }
        case SelectTypeAction.GET_CATEGORIES:
            return { ...state, loading: false }
        case SelectTypeAction.GET_CATEGORIES_SUCCESS:
            return { ...state, categories: action.list, loading: true }
        case SelectTypeAction.GET_CATEGORIES_FAIL:
            return { ...state, error: action.payload, loading: false }
        case SelectTypeAction.GET_STORES:
            return { ...state, loading: false }
        case SelectTypeAction.GET_STORES_SUCCESS:
            return { ...state, stores: action.list, loading: true }
        case SelectTypeAction.GET_STORES_FAIL:
            return { ...state, error: action.payload, loading: false }
        default:
            return state;
    }
}