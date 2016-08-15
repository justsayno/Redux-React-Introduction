import React, { Component } from 'react'
import { getEmployees } from '../api/employees'

// Components
import EmployeeList from '../components/EmployeeList'
import EmployeeListItem from '../components/EmployeeListItem'

class EmployeeDashboard extends Component {
  constructor(){
    super()
    const employees = getEmployees()
    this.state = {
      employees: employees
    }
  }
  render() {
    return (
      <div className="employee-dashboard col s12 m7">
            <EmployeeList>
             {this.state.employees.map((employee) => {
                return <EmployeeListItem key={employee.id} employee={employee} />
              })}
            </EmployeeList>
      </div>
    )
  }
}

export default EmployeeDashboard
