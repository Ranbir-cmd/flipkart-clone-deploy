import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { getProductsReducer } from "./reducers/getProductReducer";
import { getProductDetailsReducer } from "./reducers/getProductReducer";
import { cartReducer } from "./reducers/cartReducer";

import thunk from "redux-thunk";

const middleware = [thunk];

const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  cart: cartReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
