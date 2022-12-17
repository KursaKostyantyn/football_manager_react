import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {playerReducer, clubReducer, authReducer, userReducer} from "./slices";


const rootReducer = combineReducers({
    players: playerReducer,
    clubs: clubReducer,
    auth: authReducer,
    users: userReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}