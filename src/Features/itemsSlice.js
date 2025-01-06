import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    items: []
}

export const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers:{
        addNewItem:{
            // prepare function for structuring and attaching ids to the payload.
            prepare(listItem, date){
                return {
                    payload:{
                        id: nanoid(),
                        listItem,
                        date
                    }
                }
            },
            reducer(state, action){
                state.items.push(action.payload);
            }
        },
        updateItemById:(state, action)=>{
            const { id } = action.payload; // get the Id from the action payload
            const items = state.items.filter(item=> item.id !== id);
            state.items = [...items, action.payload];
        },
        deleteItemById:(state, action)=>{
            const { id } = action.payload;
            state.items = state.items.filter(item=> item.id !== id);
        }
    }
})

export const { addNewItem, updateItemById, deleteItemById } = itemsSlice.actions;
export const allItems = (state)=> state.items.items;
export const selectItemById = (state, itemId)=>
    state.items.items.find(item=> item.id === itemId)

export default itemsSlice.reducer;