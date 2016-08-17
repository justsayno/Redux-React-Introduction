import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// PropTypes
import { Employee } from '../constants/PropTypes'

// Components
import EmployeeList from '../components/EmployeeList'
import EmployeeListItem from '../components/EmployeeListItem'

// Actions
import { requestEmployees } from '../Store'

class EmployeeDashboard extends Component {
  constructor({requestEmployees}){
    super()
    requestEmployees()
  }
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

EmployeeDashboard.propTypes = {
    employees: PropTypes.arrayOf(PropTypes.shape(Employee)).isRequired,
    requestEmployees: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  employees: state.employees
})

const mapDispatchToProps = (dispatch) => ({
  requestEmployees: () => dispatch({type: 'REQUEST_EMPLOYEES'})
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDashboard)
