import { createStore } from 'redux'
import { getEmployees } from './api/employees'

const initialState = {
    employees: []
}

// actions
export const REQUEST_EMPLOYEES = 'REQUEST_EMPLOYEES'

// action creators
export const requestEmployees = () => {
    return {
        type: REQUEST_EMPLOYEES
    }
}

// reducer
export const employeesReducer = (state = initialState, action) => {
    switch(action.type){
        case REQUEST_EMPLOYEES: {
            const employees = getEmployees()
            Object.assign({}, state, {
                employees: employees
            })
        }
        default:{
            return state;
        }
            
    }
}

// store
export const Store = createStore(employeesReducer)