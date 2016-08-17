import React, { Component } from 'react'

// Components
import EmployeeList from '../components/EmployeeList'
import EmployeeListItem from '../components/EmployeeListItem'

class EmployeeDashboard extends Component {
  constructor(){
    super()
    this.state = {
      employees: getEmployees()
    }
  }
  render() {
    let { employees } = this.state
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