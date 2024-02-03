import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from 'axios'

export const STATUSES = {
    IDLE: "idle",
    LOADING: "loading",
};

export const register = createAsyncThunk(
    "auth/register",
    async(payload) => {
        try{
            const response = await axios.post("http://localhost:5000//api/users/auth/register",payload)
            const data = response.data
            console.log(data)
            return data
            
        }
        catch(err){
            return isRejectedWithValue(err.response.data.message)
        }
       
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        userInfo: null,
        status: STATUSES.IDLE,
    },
    reducers:{
        removeAuth(state){
            state.isAuthenticated = false;
            state.userInfo = null;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.status = STATUSES.LOADING;
        })

        builder.addCase(register.fulfilled, (state,action) => {
            state.status = STATUSES.IDLE;
            state.isAuthenticated = true;
            state.userInfo = action.payload.data;
            console.log(action.payload.data)
        })

        builder.addCase(register.rejected, (state) => {
            state.status = STATUSES.IDLE;
        })
    }
})

export default authSlice.reducer;