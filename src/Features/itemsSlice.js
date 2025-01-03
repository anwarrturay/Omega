import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers:{
        addNewItem:(state, action)=>{
            state.items.push(action.payload);
        },
        updateItem:(state, action)=>{
            state.items = action.payload
        },
        deleteItem:(state, action)=>{
            state.items = action.payload
        }
    }
})

export const { addNewItem } = itemsSlice.actions;
export const allItems = (state)=> state.items.items;

export default itemsSlice.reducer;