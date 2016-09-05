import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// PropTypes
import { EmployeeSimlified } from '../constants/PropTypes'

// Components
import EmployeeList from '../components/EmployeeList'
import EmployeeListItem from '../components/EmployeeListItem'
import Spinner from '../components/Spinner'
import Error from '../components/Error'

// Actions
import { requestEmployees } from '../store'

class EmployeeDashboard extends Component {
  componentWillMount () {
    const { requestEmployees } = this.props
    requestEmployees()
  }
  render() {

    const { hasLoaded } = this.props
    if(!hasLoaded){
      return <Spinner />
    }

    const { hasError, error } = this.props
    if(hasError){
      return <Error error={error} />
    }

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
    requestEmployees: PropTypes.func.isRequired,
    employees: PropTypes.arrayOf(PropTypes.shape(EmployeeSimlified)).isRequired,
    hasLoaded: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired,
    error: PropTypes.string
}

const mapStateToProps = (state) => ({
    employees: state.employees,
    hasLoaded: state.hasLoaded,
    hasError: state.hasError,
    error: state.error
})

const mapDispatchToProps = (dispatch) => ({
  requestEmployees: () => dispatch(requestEmployees())
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDashboard)
