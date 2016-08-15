import { createStore } from 'redux'

const initialState = {
    employees: []
}

const employeeReducer = (state = initialState, action) => {
    return state
}

export const Store = createStore(employeeReducer)