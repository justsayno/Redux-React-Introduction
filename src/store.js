import { createStore } from 'redux'
import { getEmployees } from './api/employees'

// Actions
const EMPLOYEES_REQUESTED = 'EMPLOYEES_REQUESTED'

// Action Creators
export const requestEmployees = () => ({ 
    type: EMPLOYEES_REQUESTED
})

const initialState = {
    employees: getEmployees()
}

const employeeReducer = (state = initialState, action) => {
    return state
}

export const store = createStore(employeeReducer, window.devToolsExtension && window.devToolsExtension())