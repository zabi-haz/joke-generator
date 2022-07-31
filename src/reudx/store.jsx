import { createStore } from "redux";
import { jokesReducers } from "./reducers/reducers";

const store = createStore(
    jokesReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store