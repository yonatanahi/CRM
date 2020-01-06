import React, { Component } from 'react';
import { observer } from 'mobx-react'
import NewClients from './NewClients'
import EmailsSent from './EmailsSent'
import OutstandingClients from './OutstandingClients'
import HottestCountry from './HottestCountry'


@observer
class Badges extends Component {
  render() {
    return (
      <div>
        <NewClients/>
        <EmailsSent/>
        <OutstandingClients/>
        <HottestCountry/>
      </div>
    )
  }
}

export default Badges;
