import { createSlice } from '@reduxjs/toolkit';


export const currentBlog = createSlice({
    name : "currentBlog",
    initialState: { value : null },
    reducers : {

        updateCurrentBlog : (state,action)=>{
            state.value = action.payload
        },

    },
})

export const { updateCurrentBlog } = currentBlog.actions;
export const currentBlogReducer = currentBlog.reducer;