import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {authService} from "../../services";

const initialState = {
    errors: null,
    isAuth: false
}

const registerUser = createAsyncThunk(
    'authSlice/register',
    async ({user}, {rejectWithValue}) => {
        try {
            const {data} = await authService.register(user);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const loginUser = createAsyncThunk(
    'authSlice/loginUser',
    async ({user}, {rejectWithValue}) => {
        try {
            const {data} = await authService.login(user);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const activateUser = createAsyncThunk(
    'authSlice/activateUser',
    async ({id},{rejectedWithValue})=>{
        try {
            const {data}= await authService.activate(id)
        } catch (e){
            return rejectedWithValue(e.response.data);
        }
    }
);

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.fulfilled, (state, action) => {
                state.errors = null;
            })
            .addCase(registerUser.rejected,(state, action) => {
                state.errors = action.payload.msg;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.errors = null;
                state.isAuth = true;
                authService.setAccessToken({access:action.payload})
            })
            .addCase(activateUser.fulfilled, (state,action)=>{
                state.errors=null;
            })
            .addCase(activateUser.rejected,(state, action) => {
                state.errors =action.payload
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').splice(-1);
                if (type === 'rejected') {
                    state.errors = action.payload;
                } else {
                    state.errors = null;
                }
            })
    }
});

const {reducer: authReducer} = authSlice;

const authActions = {
    registerUser,
    loginUser,
    activateUser
}

export {
    authReducer,
    authActions
}