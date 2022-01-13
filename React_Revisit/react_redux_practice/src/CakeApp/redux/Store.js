import {createStore} from "redux"
import cakeReducer from "./cakeReducer"

const store = createStore(cakeReducer);

export default store;