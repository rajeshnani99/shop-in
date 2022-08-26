import {createStore} from "redux"
import rootReducer from "./Reducers/Rootreducer"

const store = createStore(
    rootReducer
);

export default store;