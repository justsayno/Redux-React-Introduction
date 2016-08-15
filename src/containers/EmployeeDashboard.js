import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// PropTypes
import { Employee } from '../constants/PropTypes'

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
    employees: PropTypes.arrayOf(PropTypes.shape(Employee)).isRequired
}

const mapStateToProps = (state) => ({ 
    employees: state.employees
})

const mapDispatchToProps = (dispatch) => ({ 
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDashboard)
