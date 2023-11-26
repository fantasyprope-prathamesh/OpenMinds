import {configureStore} from '@reduxjs/toolkit'
import { currentBlogReducer } from './slice'


const store = configureStore({
    reducer : {
        blogesh : currentBlogReducer,
    }
})


export default store;