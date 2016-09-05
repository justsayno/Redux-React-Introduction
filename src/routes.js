import React from 'react'
import { Router, Route, IndexRoute, browserHistory  } from 'react-router'

// Main App Container
import App from './App'

import EmployeeDashboard from './containers/EmployeeDashboard'
import EmployeeProfile from './containers/EmployeeProfile'

// sync router with store
import { store } from './store'
import { syncHistoryWithStore } from 'react-router-redux'
const history = syncHistoryWithStore(browserHistory, store)

const Routes = ({history}) => (
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={EmployeeDashboard} />
            <Route path='/dashboard' component={EmployeeDashboard} />
            <Route path='/employee/:employeeId' component={EmployeeProfile} />
        </Route>
    </Router>
)

export default Routes