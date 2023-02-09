import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("posts/getPosts",async (_,{rejectWithValue, dispatch})=> {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    dispatch(setPosts(res.data))
})

export const removePostById = createAsyncThunk(
    "posts/removePostById", 
    async (id,{rejectWithValue, dispatch}) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        dispatch(removePost(id))
})

export const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: []
    },
    reducers: {
        setPosts: (state,action)=> {
            state.posts = action.payload
        },
        removePost: (state,action)=> {
            state.posts = state.posts.filter(post => post.id !== action.payload)
        }

    },
    extraReducers: {
        [getPosts.fulfilled]: ()=> console.log("fullfilled"),
        [getPosts.pending]: ()=> console.log("pending"),
        [getPosts.rejected]: ()=> console.log("rejected"),
        [removePostById.fulfilled]: ()=> console.log("fullfilled"),
        [removePostById.pending]: ()=> console.log("pending"),
        [removePostById.rejected]: ()=> console.log("rejected")
    }
})

export const {setPosts, removePost} = postSlice.actions
export default postSlice.reducer