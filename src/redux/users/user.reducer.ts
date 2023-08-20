import {IUser} from "../../models/IUser";
import {createSlice, isRejectedWithValue, SerializedError} from "@reduxjs/toolkit";
import * as userActions from "./user.actions";

export const userFeatureKey = "userFeature";

export interface InitialState{
    loading : boolean;
    users : IUser[];
    errorMessage : SerializedError;
}
const initialState:InitialState = {
    loading :false,
    users : [] as IUser[],
    errorMessage : {} as SerializedError
};

export const userSlice = createSlice({
    name : "userSlice",
    initialState : initialState,
    reducers : {},
    extraReducers : (builder) => {
        /**
         * get all users from server
         */
        builder.addCase(userActions.getAllUsersAction.pending, (state, action) => {
            state.loading = true;
        }).addCase(userActions.getAllUsersAction.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        }).addCase(userActions.getAllUsersAction.rejected, (state, action) => {
            state.loading = false;
            state.users = [] as IUser[];
            if (isRejectedWithValue(action)) {
                state.errorMessage = action.payload
            }
        })
    }
})















