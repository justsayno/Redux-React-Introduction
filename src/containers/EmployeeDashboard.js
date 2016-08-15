import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import EmployeeList from '../components/EmployeeList'
import EmployeeListItem from '../components/EmployeeListItem'

class EmployeeDashboard extends Component {
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

const mapStateToProps = (state) => ({ 
    employees: state.employees
})

const mapDispatchToProps = (dispatch) => ({ 
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDashboard)
