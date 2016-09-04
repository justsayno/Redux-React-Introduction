import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// PropTypes
import { Employee } from '../constants/PropTypes'

// Components
import EmployeeList from '../components/EmployeeList'
import EmployeeListItem from '../components/EmployeeListItem'
import Spinner from '../components/Spinner'

// Actions
import { requestEmployeesAsync } from '../Store'

class EmployeeDashboard extends Component {
  componentWillMount () {
    const { requestEmployees } = this.props
    requestEmployees()
  }
  render() {
    let { employees, hasLoaded } = this.props
    if(!hasLoaded){
      return <Spinner />
    }
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
    requestEmployeesAsync: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  employees: state.employees,
  hasLoaded: state.hasLoaded
})

const mapDispatchToProps = (dispatch) => ({
  requestEmployeesAsync: () => dispatch(requestEmployeesAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDashboard)
