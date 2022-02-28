import React from 'react'

const Button=(props)=>{
	const {pais}=props
	const {setFilpais}=props
	const {result}=props
	

	const handlevent=()=>{
	const resul=result.filter(elem=>
		elem.name.common.indexOf(pais.name.common)!==-1)
		props.setQuery(resul[0].name.common)
		setFilpais(resul)		
		}	
		
		return(
			<div>
				<li>{pais.name.common}
				<button onClick={handlevent}>
				browse
				</button></li>
											
			</div>

		)
}
export default Button
	
	

		

	

