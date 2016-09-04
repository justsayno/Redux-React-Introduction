import { createStore } from 'redux'
import { getEmployees } from './api/employees'

// Actions
const REQUEST_EMPLOYEES = 'REQUEST_EMPLOYEES'

// Action Creators
export const requestEmployees = () => ({ 
    type: 'REQUEST_EMPLOYEES' 
})

const initialState = {
    employees: []
}

export const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_EMPLOYEES: {
            return Object.assign({}, state, {
                employees: getEmployees()
            })
        }
        default: {
            return state
        }
    }
}

export const store = createStore(employeeReducer, window.devToolsExtension && window.devToolsExtension())