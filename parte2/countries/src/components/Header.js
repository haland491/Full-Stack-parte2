import React from 'react'


const Header=(props)=>{

	const {pais}=props
	const matrix=[]
	for(let i in pais[0].languages){		
  		matrix.push([i,pais[0].languages[i]])
  	}	
		
  		return(
			<div>
				<h1>{pais[0].name.common}</h1>
				<p>capital {pais[0].capital}</p>
				<p>poblacion {pais[0].population}</p>
				<p>Languages</p>
				<ul>
					{matrix.map(len=>
						<li key={len[0]}>{len[1]}</li>
						)}			
				</ul>
		
				<div><img src={pais[0].flags.png} width="100"></img></div>
				
				
				
			
			</div>
		)
		
}
export default Header

					





		

