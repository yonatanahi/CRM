import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

@inject("store")
@observer
class NewClients extends Component {

    render() {
        return (
            <div className="inline-block">
                <div className="circle chart"><i className="fas fa-chart-line"></i></div>
                <div className="inline-block"><span className="big">{this.props.store.getMonthYearClients()}</span><br></br><span> new {this.props.store.getMonthName()} clients</span></div>
            </div>
        )
    }
}

export default NewClients;
