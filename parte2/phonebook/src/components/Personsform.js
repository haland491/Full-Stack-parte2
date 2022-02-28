import React from 'react'


const Personsform=(props)=>{
	console.log(props)

	return(

		<form onSubmit={props.addpersons}>
        	<div> name: <input value= {props.newName} onChange={props.handliernew}/></div>
        	<div> number: <input value={props.newPhone} onChange={props.handlierphone}/></div>
        	<div><button type="submit">add</button></div>
      	</form>
      )
}
export default Personsform