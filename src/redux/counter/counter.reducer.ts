import {createSlice} from "@reduxjs/toolkit";

export const counterFeatureKey = "counterFeature";

export interface InitialState {
    count: number;
}

const initialState:InitialState  = {
    count : 0,
};

export const counterSlice = createSlice({
    name : "counterSlice",
    initialState : initialState,
     reducers : {
        incrementCounter : (state, action) => {
            state.count = state.count + 1;
        },
         decrementCounter : (state, action) => {
             state.count = state.count - 1;
         },
         incrementCounterBy : (state, action) => {
             const {value} = action.payload;
             state.count = state.count + value;
         }
     }
})
export const {incrementCounter, decrementCounter, incrementCounterBy} = counterSlice.actions;
