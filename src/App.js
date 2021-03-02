import React from 'react'
import Home from './pages/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SearchPage from './pages/SearchPage'


function App(){

  return(
    <div className="app">
      
      <Router >

        <Switch>
    
          <Route path="/">
            <Home />
          </Route>
    
          <Route exact path="/search">
            <SearchPage />
          </Route>
  

        </Switch>
        

      </Router>
    </div>
  )
}

export default App;
