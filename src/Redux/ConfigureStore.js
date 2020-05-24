import { createStore,combineReducers,applyMiddleware } from 'redux';
import { ProductDataReducer } from './Reducers/ProductData';
import thunk from "redux-thunk";

export const ConfigureStore = () =>{
    const store = createStore(
          combineReducers({
                productData : ProductDataReducer,
              
          }),
          applyMiddleware(thunk)
        );
    return store;
}