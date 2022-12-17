import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {clubService} from "../../services";


const initialState = {
    clubs: [],
    errors: null,
    clubForUpdate: null,
    clubForRender: null,
    clubForTransferFrom: null,
    clubForTransferTo: null,
    clubPhoto: null
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

const playerTransfer = createAsyncThunk(
    'clubSlice/playerTransfer',
    async ({playerId, donorClubId, recipientClubId}, {rejectedWithValue}) => {
        try {
            const {data} = await clubService.playerTransfer(playerId, donorClubId, recipientClubId);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data);
        }
    }
);

const saveClubPhoto = createAsyncThunk(
    'clubSlice/saveClubPhoto',
    async (formData, {rejectedWithValue}) => {
        try {
            const {data} = await clubService.saveClubPhoto(formData);
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data);
        }
    }
)

const getClubPhoto = createAsyncThunk(
    'clubSlice/getClubPhoto',
    async (photo, {rejectedWithValue}) => {
        try {
            const {data} = await clubService.getClubPhoto(photo);
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data);
        }
    }
)

const clubSlice = createSlice({
    name: 'clubSlice',
    initialState,
    reducers: {
        setClubForUpdate: (state, action) => {
            state.clubForUpdate = action.payload;
        },
        setClubForRender: (state, action) => {
            state.clubForRender = action.payload;
        },
        setClubForTransferFrom: (state, action) => {
            state.clubForTransferFrom = action.payload;
        },
        setClubForTransferTo: (state, action) => {
            state.clubForTransferTo = action.payload;
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
            .addCase(playerTransfer.fulfilled, (state, action) => {
                state.errors = null;
            })
            .addCase(playerTransfer.rejected, (state, action) => {
                state.errors = action.payload.msg;
            })
            .addCase(saveClubPhoto.fulfilled, (state, action) => {
                state.errors = null;
                const currentClub = state.clubs.find(value => value.id === action.payload.id)
                Object.assign(currentClub, action.payload)
                state.clubForRender = currentClub;
            })
            .addCase(saveClubPhoto.rejected, (state, action) => {
                state.errors = action.payload;
            })
            .addCase(getClubPhoto.fulfilled, (state, action) => {
                state.errors = null;
                state.clubPhoto = URL.createObjectURL(action.payload)
            })
            .addCase(getClubPhoto.rejected, (state, action) => {
                state.errors = action.payload
            })
    }
});

const {
    reducer: clubReducer,
    actions: {setClubForRender, setClubForUpdate, setClubForTransferFrom, setClubForTransferTo}
} = clubSlice;

const clubActions = {
    getAllClubs,
    deleteClubById,
    saveClub,
    updateClubById,
    addPlayerToClubById,
    playerTransfer,
    setClubForTransferFrom,
    setClubForRender,
    setClubForUpdate,
    setClubForTransferTo,
    saveClubPhoto,
    getClubPhoto
}

export {
    clubReducer,
    clubActions
}