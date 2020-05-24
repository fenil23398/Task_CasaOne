import {  GET_PRODUCTS,ADD_PRODUCT,DELETE_PRODUCT,UPDATE_PRODUCT  } from "../ActionTypes";

export const addProduct = () => ({
    type : ADD_PRODUCT,
    payLoad : {
        productId : "",
        productName : "",
        qty : "",
        price : "",
        notes : "",
    } 
})

export const deleteProduct = (id) => ({
  type : DELETE_PRODUCT,
  payLoad : id
})