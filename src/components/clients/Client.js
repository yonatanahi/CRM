import React, { Component } from 'react';
import '../../App.css';
import { observer, inject } from 'mobx-react'
const moment = require('moment')

@inject("store")
@observer
class Client extends Component {
    updateClient = () => {
        let clientDetails = prompt("Enter name, surname, country:").split(" ")
        let id = this.props.client._id
        this.props.store.updateClient(id, clientDetails[0], clientDetails[1], clientDetails[2])
    }

    render() {
        let client = this.props.client
        let name = this.props.client.name.split(" ")
        let fisrtName = name[0]
        let lastName = name[1]
        let firstContact = moment(client.firstContact).format("l")
        return (
            <tr className="client" onClick={this.updateClient}>
                <td>{fisrtName}</td>
                <td>{lastName}</td>
                <td>{client.country}</td>

                <td>{firstContact}</td>
                <td>{client.emailType ? client.emailType : "-"}</td>
                <td>{client.sold ? <i className="material-icons">check</i> : "-" }</td>
                <td>{client.owner}</td>
            </tr>
        )
    }
}

export default Client;


