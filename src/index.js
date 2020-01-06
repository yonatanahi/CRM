import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react'
import {Store} from './stores/store'

// const data = require('./data')

const store = new Store()
//store.data = 
// store.getClients()


const stores = {store}
ReactDOM.render(<Provider {... stores}>
                    <App />
                </Provider>, document.getElementById('root'));

serviceWorker.unregister();
