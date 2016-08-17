import React, { Component } from 'react'

// Components
import EmployeeList from '../components/EmployeeList'
import EmployeeListItem from '../components/EmployeeListItem'

class EmployeeDashboard extends Component {
  render() {
    let { employees } = this.props
    return (
      <div className="employee-dashboard col s12 m7">
            <EmployeeList>
             {employees.map((employee) => {
                return <EmployeeListItem key={employee.id} employee={employee} />
              })}
            </EmployeeList>
      </div>
    )
  }
}

export default EmployeeDashboard