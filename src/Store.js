import { createStore } from 'redux'
import { getEmployees } from './api/employees'

const initialState = {
    employees: getEmployees()
}

const employeeReducer = (state = initialState, action) => {
    return state
}

export const Store = createStore(employeeReducer, window.devToolsExtension && window.devToolsExtension())