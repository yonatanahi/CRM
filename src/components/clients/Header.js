import React, { Component } from 'react';
import '../../App.css';

class Header extends Component {
    render() {
        return (
            <tr className="header">
                <th>Name</th>
                <th>Surname</th>
                <th>Country</th>
                <th>First Contact</th>
                <th>Email</th>
                <th>Sold</th>
                <th>Owner</th>
            </tr>
        )
    }
}

export default Header;

