import { configureStore } from "@reduxjs/toolkit";
import  itemsReducer  from "../Features/itemsSlice";
import  counterReducer  from "../Features/counterSlice";
export const store = configureStore({
    reducer:{
        counter: counterReducer,
        items: itemsReducer
    }
})