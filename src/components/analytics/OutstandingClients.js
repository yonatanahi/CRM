import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'


@inject("store")
@observer
class OutstandingClients extends Component {

    render() {
        return (
            <div className="inline-block">
                <div className="circle user"><i className="fas fa-user-circle"></i></div>
                <div className="inline-block"><span className="big">{this.props.store.getSold()}</span><br></br><span>Outstanding Clients</span></div>
            </div>
        )
    }
}

export default OutstandingClients;
