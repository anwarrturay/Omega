import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment: (state)=>{
            state.count += 1
        },

        decrement: (state)=>{
            state.count -= 1
        },

        increaseByAmount: (state, action)=>{
            state.count += action.payload
        },
        
        reset: (state)=>{
            state.count = 0
        }
    }
})

export const { increment, decrement, increaseByAmount, reset } = counterSlice.actions;

export default counterSlice.reducer;