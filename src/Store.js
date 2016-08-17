import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { getEmployees } from './api/employees'

// Actions
const REQUEST_EMPLOYEES = 'REQUEST_EMPLOYEES'
const REQUEST_EMPLOYEES_SUCCESS = "REQUEST_EMPLOYEES_SUCCESS"

// Action Creators
export const requestEmployees = () => ({
    type: REQUEST_EMPLOYEES
})

export const requestEmployeesSuccess = (employees) => ({
    type: REQUEST_EMPLOYEES_SUCCESS,
    employees: employees
})

export const requestEmployeesAsync = () => {
    return (dispatch) => {
        dispatch(requestEmployees())
        return getEmployees().then(
            (employees) => dispatch(requestEmployeesSuccess(employees))
        )
    };
}

// initial state of the app
const initialState = {
    employees: []
}

// reducer
export const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_EMPLOYEES_SUCCESS: {
            return Object.assign({}, state, {
                employees: action.employees
            })
        }
        default: {
            return state
        }
    }
}

export const Store = createStore(
  employeeReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);