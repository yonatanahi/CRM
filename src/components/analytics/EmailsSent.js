import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

@inject("store")
@observer
class EmailsSent extends Component {

    render() {
        return (
            <div className="inline-block">
                <div className="circle envelope"><i className="fas fa-envelope"></i></div>
                <div className="inline-block"><span className="big">{this.props.store.getEmails()}</span><br></br><span>Emails Sent</span></div>
            </div>
        )
    }
}

export default EmailsSent;
