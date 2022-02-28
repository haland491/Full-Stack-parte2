import React, { useState, useEffect } from 'react'
import Persons from './components/Persons.js'
import Personsform from './components/Personsform'
import Filter from './Filter'
import axios from 'axios'
import person from './services/person'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons ] = useState([])
  
  
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setnewPhone]= useState('')
  const [search, setsearch] = useState('')
  const [message, setMessage]=useState(null)
  const [messageColor,setmessageColor]=useState('')
  
  const hook=()=>{
    person
      .getAll()
      .then(response=>
        setPersons(response.data))
  }
  useEffect(hook,[])

  function validarperso(name){
  for(let i  in persons){
  if( persons[i].name===name) {
    
    return persons[i].id
  }
}
  return false;
}

  const addpersons=(event)=>{
    event.preventDefault()
    console.log('boton clikeado',event.target)
    
    if(validarperso(newName)===false){
      const nameobj={
        name: newName,
        number: newPhone
      }
      person
      .create(nameobj)
      .then(response=>{
        console.log('HTTP POST',response.data)
        setMessage(`Added ${newName} to Phonebook`)
        setmessageColor('green')
        setTimeout(()=>{
        setMessage(null)     
      }, 5000);
       
      })

      setPersons(persons.concat(nameobj))
      
    }
      else if (window.confirm(`${newName} ya existe Desea actualizar numero?`)){
              const arr=persons.find(p=>p.name===newName)
              const id=arr.id
              const obj={
                name:arr.name,
                number:newPhone
              }
            axios
            .put(`http://localhost:63630/persons/${id}`,obj)
            .then(response=>{
            console.log('HTTP PUT',response.data)
            setmessageColor('green')
            setMessage(`Updating.......Phonebook´s ${arr.name}`)            
            setTimeout(()=>{
              setMessage(null)
            },5000)
            setPersons(persons.map(p=> p.id!==id? p:response.data))            
            })
            .catch(error=>{
                setmessageColor('red')
                setMessage(`${arr.name} ya no existe`)                
                setPersons(persons.filter(p=> p.id!==id))
                setTimeout(()=>{
                setMessage(null)
                },5000)
            })
    }
  
            setNewName('')
            setnewPhone('')
  }

  const handliernew=(event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handlierphone=(event)=>{
    console.log(event.target.value)
    setnewPhone(event.target.value)
  }
  const handliersearch=(event)=>{
    setsearch(event.target.value)
   
    }

  const handconfirmOf=(id, name)=>{
    console.log(`El id de ${name} es ${id}`)
    const confirm=window.confirm(`Delete ${name}?`)
    if(confirm){
      axios
        .delete(`http://localhost:63630/persons/${id}`)
        .then(response=>{
          console.log(response.data)
          setmessageColor('green')
          setMessage(`Deleting..........Phonebook´s ${name}`)
          setPersons(persons.filter(p=>p.id!==id))
          setTimeout(()=>{
            setMessage(null)
          }, 2000)
          
          }).catch(error=>{
              setmessageColor('red')
              setMessage(`${name} 404 Not Found`)
              setPersons(persons.filter(p=>p.id!==id))
              setTimeout(()=>{
              setMessage(null)
              }, 2000)
            })
            

    }
          
  }
  const result=persons.filter(pers=>
          pers.name.toUpperCase().indexOf(search.toUpperCase())!==-1)
   
  return (
    <div>
      
        <h1>Phonebook</h1>
        <Notification message={message} color={messageColor}/>

        <Filter  persons={persons} search={search} handliersearch={handliersearch} handconfirmOf={handconfirmOf}/>          
      
        <h2>Add new </h2>

        <Personsform addpersons={addpersons} newName={newName} handliernew={handliernew}
        newPhone={newPhone} handlierphone={handlierphone}/>
      
        <h2>Numbers</h2>
        {search===''?(
        <ul>
          {persons.map(pers=>
            <Persons key={pers.id} pers={pers} handconfirm={()=>handconfirmOf(pers.id,pers.name)}/>
              )}
        </ul>
        ):(
        <ul>
          {result.map(p=>
            <li key={p.id}> {p.name}{p.number}</li>)}
        </ul>
        )}
       
    </div>
    )
}

export default App