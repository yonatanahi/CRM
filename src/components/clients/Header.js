import React, { Component } from 'react';
import '../../App.css';

class Header extends Component {
    render() {
        return (
            <thead>
                <tr className="header">
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Country</th>
                    <th>First Contact</th>
                    <th>Email</th>
                    <th>Sold</th>
                    <th>Owner</th>
                </tr>
            </thead>
        )
    }
}

export default Header;

