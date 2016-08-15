import React, { PropTypes } from 'react'

// PropTypes
import { Employee } from '../constants/PropTypes'

const EmployeeList = ({children}) => (
    <div className="employee-list">
        <h3>Current Employees</h3>
        <ul className="collection">
            {children}
        </ul>
    </div>
)

EmployeeList.PropTypes = {
    children: PropTypes.arrayOf(PropTypes.shape(Employee)).isRequired
}

export default EmployeeList