import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {playerReducer, clubReducer, authReducer} from "./slices";


const rootReducer = combineReducers({
    players: playerReducer,
    clubs: clubReducer,
    auth: authReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}