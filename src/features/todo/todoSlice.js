import {createSlice} from "@reduxjs/toolkit"

export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        toggleCompletedTodo: (state,action) => {
            const toggleTodo = state.todos.find((todo)=> todo.id === action.payload)
            toggleTodo.completed = !toggleTodo.completed
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        }
    }
})
export const {addTodo, toggleCompletedTodo,deleteTodo} = todoSlice.actions
export default todoSlice.reducer
