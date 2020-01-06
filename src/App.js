import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Actions from './components/actions/Actions'
import Analytics from './components/analytics/Analytics'
import Clients from './components/clients/Clients'
import { inject } from 'mobx-react'

@inject('store')

@observer
class App extends Component {
  
  async componentDidMount() {
    await this.props.store.getClients()
  }

  render() {
    return (
      <div>
        <Router>
          <div className="nav-bar">
            <Link to="/clients" className="white">Clients   </Link>
            <Link to="/actions" className="white">Actions   </Link>
            <Link to="/analytics"className="white">Analytics</Link>
          </div>



          <Route path="/clients" exact component={Clients} />
          <Route path="/actions" exact component={Actions} />
          <Route path="/analytics" exact component={Analytics} />
        </Router>

      </div>
    )
  }
}

export default App;
