import React, { Component } from 'react';
import { observer } from 'mobx-react'
import SalesByCountry from './SalesByCountry'
import TopEmployees from './TopEmployees'


@observer
class Charts extends Component {

    render() {
        return (
            <div>
                <TopEmployees/>
                <SalesByCountry/>
            </div>
        )
    }
}

export default Charts;
