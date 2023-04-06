import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:[],
    isLoading: false,
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        getFetchUsers: (state) =>{
            state.isLoading = true;
        },
        getUsersSuccess: (state,action) =>{
            state.isLoading = false;
            state.user = action.payload
        },
        getUserError: (state) =>{
            state.isLoading = false;
            state.user = null
        }
    }
})

export const {getFetchUsers, getUsersSuccess, getUserError} = authSlice.actions
export default authSlice.reducer