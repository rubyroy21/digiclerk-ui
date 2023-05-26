import { createSlice } from "@reduxjs/toolkit"

const dataSlice = createSlice({
    name: "data",
    initialState: {
        userData: null,
        customersData: [],
        chatHistory: []
    },
    reducers: {
        setUserData(state, action) {
            state.userData = action.payload
        },
        setCustomersData(state, action) {
            state.customersData = action.payload
        },
        setChatHistory(state, action) {
            state.chatHistory = action.payload
        }
    }
})

export const actions = dataSlice.actions
export default dataSlice