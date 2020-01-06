import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
@inject("store")

@observer
class Actions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: '',
      client: '',
      email: '',
      sold: '',
      first_name: '',
      surname: '',
      country: '',
      add_owner: ''
    };

    // this.handleChange = this.handleOwnerChange.bind(this);
    // this.handleSubmit = this.handleOwnerSubmit.bind(this);
  }

  handleOwnerChange = (event) => {
    this.setState({ owner: event.target.value });
  }

  handleOwnerSubmit = (event) => {
    alert(`change owner of client ${this.state.client.name} (with id ${this.state.client._id}) to ${this.state.owner}`);
  }

  getOwners = () => {
    let owners = this.props.store.data.map(c => c.owner)
    owners = [...new Set(owners)]
    return owners.map(o => <option value={o}>{o}</option>)
  }

  getEmailType = () => {
    let types = ["A", "B", "C", "D"]
    return types.map(t => <option value={t}>{t}</option>)
  }

  handleClientChange = (event) => {
    let name = event.target.value.toLowerCase()
    let client = this.props.store.data.find(c => c.name.toLowerCase().includes(name))
    this.setState({ client });
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handleEmailSubmit = (event) => {
    alert(`change email of client ${this.state.client.name} (with id ${this.state.client._id}) to ${this.state.email}`);
  }


  handleSoldSubmit = async (event) => {
    await this.setState({ sold: true });
    alert(`change email of client ${this.state.client.name} (with id ${this.state.client._id}) to ${this.state.sold}`);
  }

  handleAddClient = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleGetDetails = () => {
    alert(`${this.state.first_name} ${this.state.surname} ${this.state.country} ${this.state.add_owner}`);

  }

  getClients = () => {
    return this.props.store.data.map(c => <option value={c.name}></option>)
  }

  render() {
    return (
      <div>
        <div>UPDATE</div>
        <div>Client:<input placeholder="Client Name" name="client_name" onChange={this.handleClientChange} list="clients"></input></div>
        <datalist id="clients">
          {this.getClients()}
        </datalist>
        <div id="updateClient">
          <div>Transfer ownership to:</div><select value={this.state.owner} onChange={this.handleOwnerChange}><option value="" disabled selected>Owner</option>{this.getOwners()}</select><button className="button" onClick={this.handleOwnerSubmit}>TRANSFER</button>
          <div>Send email:</div><select onChange={this.handleEmailChange}><option value="" disabled selected>Email Type</option>{this.getEmailType()}</select><button className="button" onClick={this.handleEmailSubmit}>SEND</button>
          <div>Declare sale!</div><span></span><button className="button" onClick={this.handleSoldSubmit}>DECLARE</button>
        </div>

        <hr></hr>
        <div>ADD CLIENT</div>
        <div id="addClient">
          <div> First name:</div><input name="first_name" onChange={this.handleAddClient}></input>
          <div>Surname:</div><input name="surname" onChange={this.handleAddClient}></input>
          <div>Country:</div><input name="country" onChange={this.handleAddClient}></input>
          <div>Owner:</div><input name="add_owner" onChange={this.handleAddClient}></input>
          <div><button id="addNewClient" onClick={this.handleGetDetails}>Add New Client</button></div>
        </div>

      </div>
    )
  }
}

export default Actions;
