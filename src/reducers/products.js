import { ADD_PRODUCTS, DELETE_PRODUCTS, EDIT_PRODUCTS, FETCH_PRODUCTS, FILTER_PRODUCTS } from "../constants/ActionTypes"

const initState = {
    product: [],
    filter: "",
}
export default function products(state = initState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state, product: action.payload
            }
        case ADD_PRODUCTS:
            return {
                ...state, product: [...state.product, action.payload]
            }
        case DELETE_PRODUCTS:
            return {
                ...state, product: state.product.filter(item => item.id !== action.payload)
            }
        case EDIT_PRODUCTS:
            return {
                ...state, product: state.product.map(item => item.id === action.payload.id ? action.payload.data : item)
            }
        case FILTER_PRODUCTS:
            return {
                ...state, filter: action.payload
            }
        default:
            return state
    }
} 