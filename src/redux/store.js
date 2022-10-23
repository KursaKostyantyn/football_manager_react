import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {playerReducer} from "./slices";
import {clubReducer} from "./slices";

const rootReducer = combineReducers({
    players: playerReducer,
    clubs: clubReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}