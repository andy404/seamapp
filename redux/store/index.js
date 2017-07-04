import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import AppReducer from "../reducers/index";

export default function getStore() {
    const store = createStore(
        AppReducer,
        undefined,
        applyMiddleware(thunk)
    );

    return store;
}
