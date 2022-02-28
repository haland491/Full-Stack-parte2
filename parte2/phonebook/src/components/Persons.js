import React from 'react'

const Persons=({pers,handconfirm})=>{
	

	return(
			<div>
				<li className="pers" >{pers.name} {pers.number}
				<button onClick={handconfirm}>
				Delete</button></li>
								
			</div>
			)
					
}
export default Persons