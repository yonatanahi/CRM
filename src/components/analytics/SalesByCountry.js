import React, { PureComponent } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { inject } from 'mobx-react'

@inject('store')
class SalesByCountry extends PureComponent {

    render() {
        
        return (
            <div className="inline-block">
                Sales By Country
                <BarChart
                    width={600}
                    height={300}
                    data={this.props.store.getSalesByCountry()}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#955196" />
                </BarChart>
            </div>
        );
    }
}

export default SalesByCountry