import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../../services";

const initialState = {
    users: [],
    usersErrors: null,
    userForUpdate: null,
    userForRender: null,
    userPhoto: null
}

const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await userService.getAllUsers();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const saveUser = createAsyncThunk(
    'userSlice/saveUser',
    async ({user}, {rejectWithValue}) => {
        try {
            const {data} = await userService.saveUser(user);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const deleteUserById = createAsyncThunk(
    'userSlice/deleteUserById',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await userService.deleteUserById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
)

const updateUser = createAsyncThunk(
    'userSlice/updateUser',
    async ({user, id}, {rejectWithValue}) => {
        try {
            const {data} = await userService.updateUser(user, id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const saveUserPhoto = createAsyncThunk(
    'userSlice/saveUserPhoto',
    async (formData, {rejectWithValue}) => {
        try {
            const {data} = await userService.saveUserPhoto(formData);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const getUserPhoto = createAsyncThunk(
    'userSlice/getUserPhoto',
    async (photo, {rejectWithValue}) => {
        try {
            const {data} = await userService.getUserPhoto(photo);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUserForRender: (state, action) => {
            state.userForRender = action.payload;
        },
        setUserForUpdate: (state, action) => {
            state.userForUpdate = action.payload;
        },
        setUsers: (state, action) => {
            state.users = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.usersErrors = null;
                state.users = action.payload;
                if (state.userForRender === null) {
                    state.userForRender = state.users[0]
                }
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.usersErrors = action.payload;
            })
            .addCase(saveUser.fulfilled, (state, action) => {
                state.usersErrors = null;
                state.users.push(action.payload);
            })
            .addCase(saveUser.rejected, (state, action) => {
                state.usersErrors = action.payload.msg;
            })
            .addCase(deleteUserById.fulfilled, (state, action) => {
                state.usersErrors = null;
                const index = state.users.findIndex(user => user.login === action.payload.login);
                state.users.splice(index, 1);
                if (state.userForRender.login === action.payload.login) {
                    state.userForRender = state.users[0]
                }
            })
            .addCase(deleteUserById.rejected, (state, action) => {
                state.usersErrors = action.payload;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.usersErrors = null;
                const currentUser = state.users.find(user => user.id === action.payload.id)
                Object.assign(currentUser, action.payload);
                state.userForUpdate = null;
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.usersErrors = action.payload;
                console.log(state.usersErrors)
            })
            .addCase(saveUserPhoto.fulfilled, (state, action) => {
                state.usersErrors = null;
                const currentUser = state.users.find(value => value.id === action.payload.id);
                Object.assign(currentUser, action.payload);
                state.userForRender = currentUser;
            })
            .addCase(saveUserPhoto.rejected, (state, action) => {
                state.usersErrors = action.payload;
            })
            .addCase(getUserPhoto.fulfilled, (state, action) => {
                state.usersErrors = null;
                state.userPhoto = URL.createObjectURL(action.payload)
            })
            .addCase(getUserPhoto.rejected, (state, action) => {
                state.usersErrors = action.payload;
            })


    }

})

const {reducer: userReducer, actions: {setUserForRender, setUserForUpdate, setUsers}} = userSlice;

const userActions = {
    getAllUsers,
    deleteUserById,
    saveUser,
    updateUser,
    setUserForRender,
    setUserForUpdate,
    saveUserPhoto,
    getUserPhoto,
    setUsers

}

export {
    userReducer,
    userActions
}