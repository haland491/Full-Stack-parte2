import React, {useState,useEffect} from 'react'
import Filter from './components/Filter'
import axios from 'axios'

const App =(props)=>{
  
  
  const [filter, setFilter] = useState('')
  const [filpais, setFilpais]=useState([])
  const [apiresponse,setApiresponse]=useState([])
  const [query, setQuery]=useState('Singapore')
  const api_key=process.env.REACT_APP_API_KEY


  useEffect(()=>{

    const eventhanler=response=>{
      setApiresponse(response.data)
      
    }
    
  axios
    .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${query}`)
    .then(eventhanler)
          
    },[query])
    console.log('Singapore',apiresponse.length)
  
    const hanlierevent=(event)=>{
      setFilter(event.target.value)
      setFilpais([])
    }
    
    return (

          <div>
            <div>find countries<input type='text' value={filter} onChange={hanlierevent}/></div>
            
            <Filter setQuery={setQuery} apiresponse={apiresponse} setFilpais={setFilpais} paises={props.paises} filter={filter}  filpais={filpais}/>
                                       
            
          </div>    
          )
}
export default App

