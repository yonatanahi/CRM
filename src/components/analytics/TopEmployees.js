// You only have data about clients, but each client has an owner property
// You need to group all the owners who's client's sold property is true
// Then you'll need to sort these groupings
// Only show the Top 3 employees (owners)

import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { inject } from 'mobx-react'

@inject('store')
class TopEmployees extends PureComponent {


    render() {
        let data=this.props.store.getTopEmployees()
        return (
            <div className="inline-block">
                Top Employees
                <BarChart
                    width={500}
                    height={300}
                    data={data}
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