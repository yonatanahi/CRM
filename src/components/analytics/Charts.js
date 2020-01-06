import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import SalesByCountry from './SalesByCountry'
import TopEmployees from './TopEmployees'

@inject('store')
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
