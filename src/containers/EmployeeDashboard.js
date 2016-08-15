import React, { Component, PropTypes } from 'react'

import { connect } from 'react-redux'

// Components
import EmployeeList from '../components/EmployeeList'
import EmployeeListItem from '../components/EmployeeListItem'

class EmployeeDashboard extends Component {
  render() {
    const { employees } = this.props
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

EmployeeDashboard.propTypes = { 
    employees: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return { employees: state.employees }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDashboard)
