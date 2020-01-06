import React, { Component } from 'react';
import { observer } from 'mobx-react'
import Badges from './Badges'
import Charts from './Charts'


@observer
class Analytics extends Component {
  render() {
    return (
      <div>
        <Badges/>
        <Charts/>
      </div>
    )
  }
}

export default Analytics;
