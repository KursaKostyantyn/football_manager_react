import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {clubService} from "../../services/club.service";


const initialState = {
    clubs: [],
    errors: null,
    clubForUpdate: null,
    clubForRender: null
}

const getAllClubs = createAsyncThunk(
    'clubSlice/getAllClubs',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await clubService.getAllClubs();
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const deleteClubById = createAsyncThunk(
    'clubSlice/deleteClubById',
    async ({id}, {rejectedWithValue}) => {
        try {
            const {data} = await clubService.deleteClubById(id);
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    });

const saveClub = createAsyncThunk(
    'clubSlice/saveClub',
    async ({club}, {rejectedWithValue}) => {
        try {
            const {data} = await clubService.saveClub(club);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const addPlayerToClubById = createAsyncThunk(
    'clubSlice/addPlayerToClubById',
    async ({id, playerId}, {rejectedWithValue}) => {
        try {
            const {data} = await clubService.addPlayerToClubById(id, playerId);
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const updateClubById = createAsyncThunk(
    'clubSlice/updatePlayerById',
    async ({id, club}, {rejectedWithValue}) => {
        try {
            const {data} = await clubService.updateClubById(id, club);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const clubSlice = createSlice({
    name: 'clubSlice',
    initialState,
    reducers: {
        setClubForUpdate: (state, action) => {
            state.clubForUpdate = action.payload;
        },
        setClubForRender: (state, action) => {
            state.clubForRender = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllClubs.fulfilled, (state, action) => {
                state.errors = null;
                state.clubs = action.payload;
                if (state.clubForRender === null) {
                    state.clubForRender = state.clubs[0]
                }
            })
            .addCase(getAllClubs.rejected, (state, action) => {
                state.errors = action.payload;
            })
            .addCase(deleteClubById.fulfilled, (state, action) => {
                state.errors = null;
                const index = state.clubs.findIndex(club => club.id === action.payload.id);
                state.clubs.splice(index, 1);
                if (state.clubForRender.id === action.payload.id) {
                    state.clubForRender = state.clubs[0]
                }
            })
            .addCase(deleteClubById.rejected, (state, action) => {
                state.errors = action.payload;
            })
            .addCase(saveClub.fulfilled, (state, action) => {
                state.errors = null;
                state.clubs.push(action.payload)
            })
            .addCase(saveClub.rejected, (state, action) => {
                state.errors = action.payload
            })
            .addCase(addPlayerToClubById.fulfilled, (state, action) => {
                state.errors = null;
                console.log(action.payload)
                const currentClub = state.clubs.find(club => club.id === action.payload.id);
                Object.assign(currentClub, action.payload)
                state.clubForRender = action.payload
            })
            .addCase(addPlayerToClubById.rejected, (state, action) => {
                state.errors = action.payload
            })
            .addCase(updateClubById.fulfilled, (state, action) => {
                state.errors = null;
                const currentClub = state.clubs.find(club => club.id === action.payload.id);
                Object.assign(currentClub, action.payload);
                state.clubForUpdate = null;

            })
            .addCase(updateClubById.rejected, (state, action) => {
                state.errors = action.payload;
                console.log(state.errors)
            })
    }
});

const {reducer: clubReducer, actions: {setClubForRender, setClubForUpdate}} = clubSlice;

const clubActions = {
    getAllClubs,
    setClubForRender,
    setClubForUpdate,
    deleteClubById,
    saveClub,
    updateClubById,
    addPlayerToClubById
}

export {
    clubReducer,
    clubActions
}