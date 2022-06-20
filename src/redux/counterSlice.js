import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initState = {
    product: [],
    filter: "",
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initState,
    reducers: {
        fetchProducts: (state, action) => {
            state.product = action.payload
        },
        addProducts: (state, action) => {
            state.product.push(action.payload)
        },
        deleteProducts: (state, action) => {
            state.product = state.product.filter(item => item.id !== action.payload)
        },
        editProducts: (state, action) => {
            const arrayProduct = state.product
            const index = arrayProduct.findIndex(item=>item.id===action.payload.id)
            state.product.splice(index,1,action.payload.data)
        },
        filterProducts: (state, action) => {
            state.filter = action.payload
        },
    }})

export const fetchProductsThunk = () => {
    return (dispatch) => {
        axios.get("http://localhost:5000/products").then((res) => {
            dispatch({ type: "counter/fetchProducts", payload: res.data })
        })
    }
}

export const addProductsThunk = (product) => {
    return (dispatch) => {
        axios.post("http://localhost:5000/products", product).then((res) => {
            dispatch({ type: "counter/addProducts", payload: res.data })
        })
    }
}

export const deleteProductsThunk = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:5000/products/${id}`).then((res) => {
            dispatch({ type: "counter/deleteProducts", payload: id })
        })
    }
}

export const editProductsThunk = (id,data) => {
    return (dispatch) => {
        axios.put(`http://localhost:5000/products/${id}`,data).then((res)=>{
            dispatch({type:"counter/editProducts",payload:{id,data:res.data}})
        })
    }
} 

export const {filterProducts} = counterSlice.actions

export default counterSlice.reducer
