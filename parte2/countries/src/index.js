import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'


const promise=axios.get('https://restcountries.com/v3.1/all/')
 promise.then(response=>{
      const paises=response.data
  		ReactDOM.render(<App paises={paises} />, document.getElementById('root'))
})

      
      






   
    



