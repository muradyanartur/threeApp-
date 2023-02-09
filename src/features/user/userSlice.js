import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        firstName: "",
        lastName: "",
    },
    reducers: {
        setName: (state, action) => {
            if (action.payload.type === "firstName") {
                state.firstName = action.payload.name
            } else if (action.payload.type === "lastName") {
                state.lastName = action.payload.name
            }
        },
        // setFirstName: (state,action) => {
        //     state.firstName = action.payload
        //     console.log(state);
        // },
        // setLastName: (state,action) => {
        //     state.lastName = action.payload
        // }
    }
})
export const {setFirstName, setLastName, setName} = userSlice.actions
export default userSlice.reducer