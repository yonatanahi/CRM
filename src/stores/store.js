import { observable, action } from 'mobx'
const axios = require('axios');



//   async postTransaction(operation) {
//     await axios.post("http://localhost:3001/transaction", operation)
//     this.getTransactions()
//   }

//   async deleteTransaction(id) {
//     await axios.delete("http://localhost:3001/transaction", { data: { id: id } })
//     this.getTransactions()
//   }


class Store {
    @observable data = []

    @action updateClient = (id, firstname, surname, country) => {
        let client = this.data.find(c => c._id === id)
        client.name = `${firstname} ${surname}`
        client.country = country
    }

    @action getMonthYearClients = () => {
        let count = 0
        for (let c of this.data) {
            if (new Date(c.firstContact).getMonth() === new Date().getMonth() && new Date(c.firstContact).getYear() === new Date().getYear()) {
                count++
            }
        }

        return count
    }

    @action getMonthName = () => {
        let d = new Date();
        let month = []
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
        let n = month[d.getMonth()];
        return n
    }

    @action getEmails = () => {
        let count = 0
        for (let c of this.data) {
            if (c.emailType) {
                count++
            }
        }
        return count
    }

    @action getSold = () => {
        let count = 0
        for (let c of this.data) {
            if (!c.sold) {
                count++
            }
        }
        return count
    }

    @action getHottest = () => {
        let countriesList = []
        let countriesObj = []

        for (let c of this.data) {
            if (!countriesList.includes(c.country)) {
                countriesList.push(c.country)
            }
        }

        for (let c of countriesList) {
            countriesObj[c] = 0
        }

        for (let c of this.data) {
            countriesObj[c.country]++
        }

        let countries = Object.keys(countriesObj)
        let clients = Object.values(countriesObj)

        return countries[clients.indexOf(Math.max(...clients))]
    }

    getSalesByCountry = () => {
        let data = this.data
        let countries = [...new Set(data.map(c => c.country))]
        countries = countries.map(c => { return { name: c, sales: 0 } })
        for (let country of countries) {
            for (let client of data) {
                if (client.country === country.name) {
                    country.sales++
                }
            }
        }
        return countries
    }


    getClients = async () => {
        const response = await axios.get("http://localhost:3001/clients")
        this.data = response.data[0]
    }

    getTopEmployees = () => {
        let data = this.data.filter(c => c.sold === 1)

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
}

export {Store}