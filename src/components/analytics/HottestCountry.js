import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'


@inject('store')
@observer
class HottestCountry extends Component {
    
  render() {
    return (
        <div className="inline-block">
          <div className="circle globe"><i className="fas fa-globe-americas"></i></div>
          <div className="inline-block"><span className="big">{this.props.store.getHottest()}</span><br></br><span> Hottest Country</span></div>
        </div>
    )
  }
}

export default HottestCountry;
