import React from 'react'
import Header from './Header'
import Weather from './Weather'
import Button from './Button'

const Filter=(props)=>{	
	if (props.filpais.length===1){
		return <Weather pais={props.filpais} apiresponse={props.apiresponse}/>
	}
	const {paises}=props
	const {setFilpais}=props
	const {setQuery}=props
	const {apiresponse}=props
	

	const result=(paises.filter(p=>
          p.name.common.toUpperCase().indexOf(props.filter.toUpperCase())!==-1))
	console.log(result)
	
	if(result.length===1)

		return <Header pais={result}/> 
	
	if (result.length>1 && result.length<10) {
			
			return(
				<div>
			 		<ul>
			 			{result.map(pais=>
			 				<Button key={pais.capital}  pais={pais} setFilpais={setFilpais}
			 				result={result} setQuery={setQuery}/>
			 				)}
			 		</ul>
			 			
			 	</div>
			 	)
		}

		if(result.length>10 && result.length<15){
			return <p>Too many Countries</p>
		}
		return <p></p>


	}
export default Filter

	
	

