import React, { PropTypes } from 'react'

const EmployeeList = ({children}) => (
    <div className="employee-list">
        <h3>Current Employees</h3>
        <ul className="collection">
            {children}
        </ul>
    </div>
)

EmployeeList.PropTypes = {
    children: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        team: PropTypes.string.isRequired,
        biography: PropTypes.string.isRequired,
        keySkills: PropTypes.arrayOf(React.PropTypes.shape({
            name: PropTypes.string.isRequired
        })),
        recentProjects: PropTypes.arrayOf(React.PropTypes.shape({
            name: PropTypes.string.isRequired
        }))
    }))
}

export default EmployeeList