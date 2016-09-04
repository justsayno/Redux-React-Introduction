import { createStore } from 'redux'
import { getEmployees } from './api/employees'

// Actions
const EMPLOYEES_REQUESTED = 'EMPLOYEES_REQUESTED'

// Action Creators
export const requestEmployees = () => ({ 
    type: EMPLOYEES_REQUESTED
})

const initialState = {
    employees: []
}

export const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case EMPLOYEES_REQUESTED: {
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