import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'

// Redux 
import { Provider } from 'react-redux'
import { Store } from './Store'

ReactDOM.render(
  <Provider store={Store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
