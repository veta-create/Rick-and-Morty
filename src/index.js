import './index.css'
import reportWebVitals from './reportWebVitals'
import store, { subscribe } from './redux/store'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'

let rerender = () => {ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
)}

rerender(store)

subscribe(rerender)

reportWebVitals()
