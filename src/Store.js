import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { getEmployees } from './api/employees'

// Actions
const EMPLOYEES_REQUESTED = 'EMPLOYEES_REQUESTED'
const EMPLOYEES_RECEIVED = "EMPLOYEES_RECEIVED"

// Action Creators
export const employeesRequested = () => ({
    type: EMPLOYEES_REQUESTED
})

export const employeesReceived = (employees) => ({
    type: EMPLOYEES_RECEIVED,
    employees: employees
})

export const requestEmployees = () => {
    return (dispatch) => {
        dispatch(employeesRequested())
        return getEmployees().then(
            (employees) => dispatch(employeesReceived(employees))
        )
    };
}

// initial state of the app
const initialState = {
    employees: [],
    hasLoaded: false
}

// reducer
export const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case EMPLOYEES_REQUESTED: {
            return Object.assign({}, state, {
                hasLoaded: false
            })
        }
        case EMPLOYEES_RECEIVED: {
            return Object.assign({}, state, {
                employees: action.employees,
                hasLoaded: true
            })
        }
        default: {
            return state
        }
    }
}

export const store = createStore(
  employeeReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);