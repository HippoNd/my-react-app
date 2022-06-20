import { type } from "@testing-library/user-event/dist/type"
import axios from "axios"
import { ADD_PRODUCTS, DELETE_PRODUCTS, EDIT_PRODUCTS, FETCH_PRODUCTS, FILTER_PRODUCTS } from "../constants/ActionTypes"

export const fetchProducts = () => {
    return (dispatch) => {
        axios.get("http://localhost:5000/products").then((res)=>{
            dispatch({type:FETCH_PRODUCTS,payload:res.data})
        })
    }
}
export const addProducts = (product) => {
    return (dispatch) => {
        axios.post("http://localhost:5000/products",product).then((res)=>{
            dispatch({type:ADD_PRODUCTS,payload:res.data})
        })
    }
}
export const deleteProducts = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:5000/products/${id}`).then((res)=>{
            dispatch({type:DELETE_PRODUCTS,payload:id})
        })
    }
}
export const editProducts = (id,data) => {
    return (dispatch) => {
        axios.put(`http://localhost:5000/products/${id}`,data).then((res)=>{
            dispatch({type:EDIT_PRODUCTS,payload:{id,data:res.data}})
            console.log(data)
        })
    }
} 
export const filterProducts = (text) => ({type:FILTER_PRODUCTS,payload:text})