import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'

export let rerender = (store) => {ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
)}