import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Client from './Client'
import Header from './Header'


@inject("store")
@observer
class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
              search: '',
              filter: 'Name'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

   await  this.setState({
      [name]: value
    });    
  }
  
  
  getData = (filter) => {
    let clients = this.props.store.data
    let search = this.state.search.toLowerCase()
        
    if(filter==="Name"){
       clients = clients.filter(c => c.name.toLowerCase().includes(search))
    }else if(filter === "Country"){
      clients = clients.filter(c => c.country.toLowerCase().includes(search))      
    }else if(filter === "Email"){
      clients = clients.filter(c => c.emailType ? c.emailType.toLowerCase().includes(search) : null)      
    }else if(filter === "Sold"){
      clients = clients.filter(c => c.sold === 1)      
    }else if(filter === "Owner"){
      clients = clients.filter(c => c.owner.toLowerCase().includes(search))      
    }
    
    return  clients.map(c => <Client key={c.id} client={c}></Client>)
  }



  render() {
    return (
      <div>
        <input placeholder="Search" onChange={this.handleInputChange} name="search"></input>
        <select id="search" onChange={this.handleInputChange} name="filter">
          <option  value="Name" defaultValue>Name</option>
          <option value="Country">Country</option>
          <option value="Email">Email</option>
          <option value="Sold">Sold</option>
          <option value="Owner">Owner</option>
        </select>
        <table>
          <Header />
          {this.getData(this.state.filter)}
        </table>
      </div>
    )
  }
}

export default Clients;
