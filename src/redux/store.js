import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {playerReducer} from "./slices";

const rootReducer = combineReducers({
    players: playerReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}