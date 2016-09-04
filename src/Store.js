import { createStore } from 'redux'
import { getEmployees } from './api/employees'

// Actions
const REQUEST_EMPLOYEES = 'REQUEST_EMPLOYEES'

// Action Creators
export const requestEmployees = () => ({ 
    type: REQUEST_EMPLOYEES
})

const initialState = {
    employees: getEmployees()
}

const employeeReducer = (state = initialState, action) => {
    return state
}

export const store = createStore(employeeReducer, window.devToolsExtension && window.devToolsExtension())