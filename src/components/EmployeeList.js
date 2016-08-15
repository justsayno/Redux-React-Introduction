import React, { PropTypes } from 'react'

// PropTypes
import { Employee } from '../constants/PropTypes'

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
}

export default EmployeeList