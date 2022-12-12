import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {playerService} from "../../services";

const initialState = {
    players: [],
    errors: null,
    playerForRender: null,
    playerForUpdate: null,
    playerForTransfer: null,
    playerPhoto: null
};

const getAllPlayers = createAsyncThunk(
    'playerSlice/getAllPlayers',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await playerService.getAllPlayers();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const updatePlayerById = createAsyncThunk(
    'playersSlice/updatePlayerById',
    async ({id, player}, {rejectedWithValue}) => {
        try {
            const {data} = await playerService.updatePlayerById(id, player);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const savePlayer = createAsyncThunk(
    'playersSlice/savePlayer',
    async ({player}, {rejectedWithValue}) => {
        try {
            const {data} = await playerService.savePlayer(player,localStorage.getItem('userLogin'));
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data())
        }
    }
);

const deletePlayerById = createAsyncThunk(
    'playersSlice/deletePlayerById',
    async ({id}, {rejectedWithValue}) => {
        try {
            const {data} = await playerService.deletePlayerById(id);
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const savePlayerPhoto = createAsyncThunk(
    'playersSlice/savePlayerPhoto',
    async (formData,{rejectedWithValue})=>{
        try {
            const {data}= await playerService.savePlayerPhoto(formData);
            return data;
        } catch (e) {
            return  rejectedWithValue(e.response.data);
        }
    }
)

const getPlayerPhoto = createAsyncThunk(
    'playersSlice/getPlayerPhoto',
    async (photo,{rejectedWithValue})=>{
        try {
            const {data}= await playerService.getPlayerPhoto(photo);
            return data;
        } catch (e) {
            return  rejectedWithValue(e.response.data);
        }
    }
)

const playerSlice = createSlice({
    name: 'playerSlice',
    initialState,
    reducers: {
        setPlayerForUpdate: (state, action) => {
            state.playerForUpdate = action.payload;
        },
        setPlayerForRender: (state, action) => {
            state.playerForRender = action.payload;
        },
        setPlayerForTransfer: (state, action) => {
            state.playerForTransfer = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllPlayers.fulfilled, (state, action) => {
                state.errors = null;
                state.players = action.payload;
                if (state.playerForRender === null) {
                    state.playerForRender = state.players[0]
                }
            })
            .addCase(getAllPlayers.rejected, (state, action) => {
                state.errors = action.payload;
            })
            .addCase(updatePlayerById.fulfilled, (state, action) => {
                state.errors = null;
                const currentPlayer = state.players.find(value => value.id === action.payload.id);
                Object.assign(currentPlayer, action.payload);
                state.playerForUpdate = null;
            })
            .addCase(updatePlayerById.rejected, (state, action) => {
                state.errors = action.payload;
            })
            .addCase(savePlayer.fulfilled, (state, action) => {
                state.errors = null;
                state.players.push(action.payload);
            })
            .addCase(savePlayer.rejected, (state, action) => {
                state.errors = action.payload;
            })
            .addCase(deletePlayerById.fulfilled, (state, action) => {
                state.errors = null;
                const index = state.players.findIndex(player => player.id === action.payload.id);
                state.players.splice(index, 1);
                if (state.playerForRender.id === action.payload.id) {
                    state.playerForRender = state.players[0]
                }
            })
            .addCase(deletePlayerById.rejected, (state, action) => {
                state.errors = action.payload;
            })
            .addCase(savePlayerPhoto.fulfilled, (state, action) => {
                state.errors = null;
                const currentPlayer = state.players.find(value => value.id === action.payload.id);
                Object.assign(currentPlayer, action.payload);
                state.playerForRender = currentPlayer;
            })
            .addCase(savePlayerPhoto.rejected, (state, action) => {
                state.errors = action.payload;
            })
            .addCase(getPlayerPhoto.fulfilled, (state, action) => {
                state.errors = null;
                state.playerPhoto= URL.createObjectURL(action.payload)
            })
            .addCase(getPlayerPhoto.rejected, (state, action) => {
                state.errors = action.payload;
            })
    }
});

const {reducer: playerReducer, actions: {setPlayerForUpdate, setPlayerForRender, setPlayerForTransfer}} = playerSlice;

const playerActions = {
    getAllPlayers,
    setPlayerForUpdate,
    updatePlayerById,
    savePlayer,
    deletePlayerById,
    setPlayerForRender,
    setPlayerForTransfer,
    savePlayerPhoto,
    getPlayerPhoto
}

export {
    playerReducer,
    playerActions
}