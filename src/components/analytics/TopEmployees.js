// You only have data about clients, but each client has an owner property
// You need to group all the owners who's client's sold property is true
// Then you'll need to sort these groupings
// Only show the Top 3 employees (owners)

import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { inject } from 'mobx-react'

@inject('store')
class TopEmployees extends PureComponent {
    getTopEmployees = () => {
        let data = this.props.store.data.filter(c => c.sold === true)
        let owners = [...new Set(data.map(c => c.owner))]
        owners = owners.map(c => { return { name: c, sales: 0 } })
        for (let owner of owners) {
            for (let client of data) {
                if (client.owner === owner.name) {
                    owner.sales++
                }
            }
        }

        owners.sort(function (a, b) {
            return a["sales"] - b["sales"];
        });
        return owners.splice(-3, 3).reverse()
    }


    render() {
        return (
            <div className="inline-block">
                Top Employees
                <BarChart
                    width={500}
                    height={300}
                    data={this.getTopEmployees()}
                    layout={"vertical"}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                    <XAxis dataKey="sales" type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#003f5c" barSize={20} />
                </BarChart>
            </div>

        );
    }
}

export default TopEmployees