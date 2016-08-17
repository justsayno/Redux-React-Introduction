import { createStore } from 'redux'

const initialState = {
    employees: getEmployees()
}

const employeeReducer = (state = initialState, action) => {
    return state
}

export const Store = createStore(employeeReducer, window.devToolsExtension && window.devToolsExtension())