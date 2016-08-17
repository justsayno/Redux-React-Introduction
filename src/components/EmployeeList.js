import React, { PropTypes } from 'react'

// PropTypes
import { Employee } from '../constants/PropTypes'

<<<<<<< HEAD
const EmployeeList = ({children}) => {
    if(children.length > 0){
        return  (
            <div className="employee-list">
                <h3>Current Employees</h3>
                <ul className="collection">
                    {children}
                </ul>
            </div>
        )
    }
    else{
        return (
            <div>
                <h3>Current Employees</h3>
                <p>No employees found.</p>
            </div>
        )
    }
}

EmployeeList.PropTypes = {
    children: PropTypes.arrayOf(PropTypes.shape(Employee)).isRequired
=======
const EmployeeList = ({children}) => (
    <div className="employee-list">
        <h3>Current Employees</h3>
        <ul className="collection">
            {children}
        </ul>
    </div>
)

EmployeeList.PropTypes = {
    children: PropTypes.arrayOf(PropTypes.shape(Employee))
>>>>>>> step-4
}

export default EmployeeList