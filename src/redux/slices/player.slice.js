import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {playerService} from "../../services";

const initialState = {
    players: [],
    errors: null
};

const getAllPlayers = createAsyncThunk(
    'playerSlice/getAllPlayers',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await playerService.getAllPlayers();
            console.log('Asynksunck',data);
            return data
        } catch (e) {
            console.log('reject');
            return rejectWithValue(e.response.data)
        }
    }
);

const playerSlice = createSlice({
    name: 'playerSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllPlayers.fulfilled, (state, action) => {
                state.errors = null;
                state.players = action.payload;
                console.log("builder fulfiled")
            })
            .addCase(getAllPlayers.rejected, (state, action) => {
                state.errors = action.payload;
                console.log('builder rejected')
            })
    }
});

const {reducer: playerReducer} = playerSlice;

const playerActions = {
    getAllPlayers
}

export {
    playerReducer,
    playerActions
}