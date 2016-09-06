import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { getEmployees, getEmployee } from './api/employees'

// Actions
const EMPLOYEES_REQUESTED = 'EMPLOYEES_REQUESTED'
const EMPLOYEES_RECEIVED = "EMPLOYEES_RECEIVED"
const EMPLOYEES_ERROR_RECEIVED = "EMPLOYEES_ERROR_RECEIVED"

const EMPLOYEE_SELECTED = 'EMPLOYEE_SELECTED'
const EMPLOYEE_RECEIVED = "EMPLOYEE_RECEIVED"
const EMPLOYEE_ERROR_RECEIVED = "EMPLOYEE_ERROR_RECEIVED"


// employees action creators
export const employeesRequested = () => ({
    type: EMPLOYEES_REQUESTED
})

export const employeesReceived = (employees) => ({
    type: EMPLOYEES_RECEIVED,
    employees: employees
})

export const employeesErrorReceived = (error) => ({
    type: EMPLOYEES_ERROR_RECEIVED,
    error: error
})

export const requestEmployees = () => {
    return (dispatch, getState) => {
        const state = getState()
        const { hasLoaded, isFetching } = state.employees
        if( hasLoaded || isFetching ) return
        
        dispatch(employeesRequested())
        return getEmployees().then(
            (employees) => dispatch(employeesReceived(employees)),
            (error) => dispatch(employeesErrorReceived(error))
        )
    }
}

// selected employee action creators
export const employeeSelected = (employeeId) => ({
    type: EMPLOYEE_SELECTED,
    employeeId: employeeId
})

export const employeeReceived = (employee) => ({
    type: EMPLOYEE_RECEIVED,
    employee: employee
})

export const employeeErrorReceived = (error) => ({
    type: EMPLOYEE_ERROR_RECEIVED,
    error: error
})

const shouldFetchEmployee = (employeeId, state) => {
    const { hasLoaded, isFetching, item: currentEmployee } = state.selectedEmployee
    if((hasLoaded || isFetching) & (currentEmployee && employeeId === currentEmployee.id)) {
        return false
    }
    return true
}

export const requestEmployee = (employeeId) => {
    return (dispatch, getState) => {
        const state = getState()
        if(!shouldFetchEmployee(employeeId, state)) return
        
        dispatch(employeeSelected(employeeId))
        return getEmployee(employeeId).then(
            (employee) => dispatch(employeeReceived(employee)),
            (error) => dispatch(employeeErrorReceived(error))
        )
    }
}



// initial state of the employee reducer
const employeesInitialState = {
    items: [],
    hasLoaded: false,
    isFetching: false,
    hasError: false,
    error: null
}

// employees reducer
export const employeeReducer = (state = employeesInitialState, action) => {
    switch (action.type) {
        case EMPLOYEES_REQUESTED: {
            return Object.assign({}, state, {
                items: [],
                hasLoaded: false,
                isFetching: true,
                hasError: false,
                error: null
            })
        }
        case EMPLOYEES_RECEIVED: {
            return Object.assign({}, state, {
                items: action.employees,
                hasLoaded: true,
                isFetching: false,
                hasError: false,
                error: null
            })
        }
        case EMPLOYEES_ERROR_RECEIVED: {
            return Object.assign({}, state, {
                items: [],
                hasLoaded: true,
                isFetching: false,
                hasError: true,
                error: action.error
            })
        }
        default: {
            return state
        }
    }
}

// initial state of the selected employee reducer
const selectedEmployeeInitialState = {
    item: null,
    hasLoaded: false,
    isFetching: false,
    hasError: false,
    error: null
}

// selected employee reducer
export const selectedEmployeeReducer = (state = selectedEmployeeInitialState, action) => {
    switch (action.type) {
        case EMPLOYEE_SELECTED: {
            return Object.assign({}, state, {
                item: null,
                hasLoaded: false,
                isFetching: true,
                hasError: false,
                error: null
            })
        }
        case EMPLOYEE_RECEIVED: {
            return Object.assign({}, state, {
                item: action.employee,
                hasLoaded: true,
                isFetching: false,
                hasError: false,
                error: null
            })
        }
        case EMPLOYEE_ERROR_RECEIVED: {
            return Object.assign({}, state, {
                item: null,
                hasLoaded: true,
                isFetching: false,
                hasError: true,
                error: action.error
            })
        }
        default: {
            return state
        }
    }
}

const rootReducer = combineReducers({
    employees: employeeReducer,
    selectedEmployee: selectedEmployeeReducer
})

const initialState = {
    employees: employeesInitialState,
    selectedEmployee: selectedEmployeeInitialState
}

export const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)