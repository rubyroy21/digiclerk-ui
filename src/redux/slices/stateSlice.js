import { createSlice } from "@reduxjs/toolkit"
import dayjs from 'dayjs'

const stateSlice = createSlice({
    name: "state",
    initialState: {
        isLoggedIn: false,
        activeCustomerId: null,
        openChatBot: false,
        tabList: [{ value: 0, label: 'Customers' }, {value: 1, label: 'Assistant'}],
        currentTabIndex: 0,
        nodeSelectionModel: [],
    },
    reducers: {
        setIsLoggedIn(state, action) {
            state.isLoggedIn = action.payload
        },
        setActiveCustomerId(state, action) {
            state.activeCustomerId = action.payload
        },
        setOpenChatBot(state, action) {
            state.openChatBot = action.payload
        },
        setTabList(state, action) {
            state.tabList = action.payload
        },
        setCurrentTabIndex(state, action) {
            state.currentTabIndex = action.payload
        },
        setNodeSelectionModel(state, action) {
            state.nodeSelectionModel = action.payload
        }
    }
})

export const actions = stateSlice.actions
export default stateSlice