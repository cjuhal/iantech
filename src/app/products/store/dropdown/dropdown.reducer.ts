import { ISelect } from '../../models/iselect'
import { DropdownAction, DropdownTypeAction } from './dropdown.actions'

export interface DropdownState {
    products: Array<ISelect>,
    categories: Array<ISelect>,
    stores: Array<ISelect>,
    loading: boolean,
    error: Error
}

const initialState: DropdownState = {
    products: [],
    categories: [],
    stores: [],
    loading: false,
    error: undefined
}


export function DropdownReducer(state: DropdownState = initialState, action: DropdownAction) {
    switch (action.type) {
        case DropdownTypeAction.GET_PRODUCTS:
            return { ...state, loading: false }
        case DropdownTypeAction.GET_CATEGORIES:
            return { ...state, loading: false }
        case DropdownTypeAction.GET_STORES:
            return { ...state, loading: false }
        case DropdownTypeAction.GET_PRODUCTS_SUCCESS:
            return { ...state, products: action.payload, loading: true }
        case DropdownTypeAction.GET_CATEGORIES_SUCCESS:
            return { ...state, categories: action.payload, loading: true }
        case DropdownTypeAction.GET_STORES_SUCCESS:
            return { ...state, stores: action.payload, loading: true }
        case DropdownTypeAction.GET_FAIL:
            return { ...state, error: action.payload, loading: false }
        default:
            return state;
    }
}