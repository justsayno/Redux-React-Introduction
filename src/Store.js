import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { getEmployees } from './api/employees'

// Actions
const REQUEST_EMPLOYEES = 'REQUEST_EMPLOYEES'

// Action Creators
export const requestEmployees = () => ({ 
    type:  REQUEST_EMPLOYEES
})

export const requestEmployeesAsync = () => {
    return (dispatch) => {
        return setTimeout(() => {
            // Yay! Can invoke sync or async actions with `dispatch`
            dispatch(requestEmployees());
        }, 1000);
    }
}

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

export const Store = createStore(
  employeeReducer,
  applyMiddleware(thunk)
);