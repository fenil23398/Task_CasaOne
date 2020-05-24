import { GET_PRODUCTS,ADD_PRODUCT,DELETE_PRODUCT,UPDATE_PRODUCT } from "../ActionTypes";
import { ProductData } from "../../Components/Data/ProductData";

const initialState = {
    productData : ProductData
}

export const ProductDataReducer = (state = initialState.productData,action) => {
    switch(action.type){
        case GET_PRODUCTS :
            return {
                ...state,
                productData : action.payLoad
            }
        case ADD_PRODUCT :
            console.log("PaylOaded data ",action.payLoad);
            console.log("State Value ",state);
            return state.concat(action.payLoad)
            // return {
            //     // ...state,
            //     // productData : state.productData.concat(action.payLoad)
            // }
        case DELETE_PRODUCT :
           
            console.log("Inside Delete Data ",action.payLoad)
            return state.filter((prod) => prod.productId !== action.payLoad )
           
        case UPDATE_PRODUCT :
            return {
                ...state,
                productData : action.payLoad
            }
                 
        default : 
            return state;
    }
}