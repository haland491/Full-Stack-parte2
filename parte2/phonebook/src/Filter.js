import React from 'react'

const Filter=(props)=>{
	console.log(props)
	const {persons}=props


		
	return(
		<div>
			<div>Filter shown with <input value={props.search} onChange={props.handliersearch}/></div>
			 
		</div>
		)
	

}
export default Filter












