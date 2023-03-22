import React from 'react'
import './App.css'
import ReduxDemo from './pages/redux-demo'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/redux">
              <ReduxDemo />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  )
}

export default App
