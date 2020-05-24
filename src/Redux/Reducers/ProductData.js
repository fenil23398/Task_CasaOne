import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "../ActionTypes";
import { ProductData } from "../../Components/Data/ProductData";

const initialState = {
    productData: ProductData
}

export const ProductDataReducer = (state = initialState.productData, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                productData: action.payLoad
            }
        case ADD_PRODUCT:
            // console.log("PaylOaded data ", action.payLoad);
            // console.log("State Value ", state);
            return state.concat(action.payLoad)

        case DELETE_PRODUCT:
            //console.log("Inside Delete Data ", action.payLoad)
            //return state.filter((prod) => prod.productId !== action.payLoad )
            return [...state.slice(0, action.payLoad), ...state.slice(action.payLoad + 1)]
           
            // let newState = [...state];
            // newState.splice(action.index, 1);
            // return newState;

        case UPDATE_PRODUCT:
            return state.map((prod, i) => prod.productId === action.payLoad.productId
                ?
                {
                    ...prod,
                    productName: action.payLoad.productName,
                    qty: action.payLoad.qty,
                    price: action.payLoad.price,
                    notes: action.payLoad.notes
                }
                : prod
            )


        default:
            return state;
    }
}