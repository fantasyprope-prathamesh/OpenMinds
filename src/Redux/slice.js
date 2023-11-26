import { createSlice } from '@reduxjs/toolkit';


export const currentBlog = createSlice({
    name : "currentBlog",
    initialState: { value : ""},
    reducers : {

        updateCurrentBlog : (state,action)=>{
            // if(state.value == ""){
            //     state.value = action.payload
            // }
            state.value = action.payload
        },

    },
})

export const { updateCurrentBlog } = currentBlog.actions;
export const currentBlogReducer = currentBlog.reducer;