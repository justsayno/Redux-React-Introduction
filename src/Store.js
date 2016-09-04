import { createStore } from 'redux'
import { getEmployees } from './api/employees'

const initialState = {
    employee: getEmployees()
}

const employeeReducer = (state = initialState, action) => {
    return state
}

export const store = createStore(employeeReducer, window.devToolsExtension && window.devToolsExtension())