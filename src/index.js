import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

let cardsData = [{ id: 1, name: 'Rick', status: 'alive', species: 'Humanoid', gender: 'male', img: 'www' },
{ id: 2, name: 'Morty', status: 'alive', species: 'Humanoid', gender: 'male', img: 'www' },
{ id: 3, name: 'Morty', status: 'alive', species: 'Humanoid', gender: 'male', img: 'www' },
{ id: 4, name: 'Morty', status: 'alive', species: 'Humanoid', gender: 'male', img: 'www' },
{ id: 5, name: 'Morty', status: 'alive', species: 'Humanoid', gender: 'male', img: 'www' },
{ id: 6, name: 'Morty', status: 'alive', species: 'Humanoid', gender: 'male', img: 'www' },
{ id: 7, name: 'Morty', status: 'alive', species: 'Humanoid', gender: 'male', img: 'www' },
{ id: 8, name: 'Morty', status: 'alive', species: 'Humanoid', gender: 'male', img: 'www' },
{ id: 9, name: 'Morty', status: 'alive', species: 'Humanoid', gender: 'male', img: 'www' },
{ id: 10, name: 'Morty', status: 'alive', species: 'Humanoid', gender: 'male', img: 'www' },
{ id: 11, name: 'Morty', status: 'alive', species: 'Humanoid', gender: 'male', img: 'www' },
{ id: 12, name: 'Morty', status: 'alive', species: 'Humanoid', gender: 'male', img: 'www' }]

ReactDOM.render(
  <React.StrictMode>
    <App cardsData={cardsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
