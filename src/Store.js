import { createStore } from 'redux'
import { getEmployees } from './api/employees'

// Actions
const REQUEST_EMPLOYEE = 'REQUEST_EMPLOYEE'

// Action Creators
export const requestEmployee = (id) => ({
    type: REQUEST_EMPLOYEE,
    id: id
})

const initialState = {
    employees: getEmployees()
}

const employeeReducer = (state = initialState, action) => {
    return state
}

export const Store = createStore(employeeReducer)