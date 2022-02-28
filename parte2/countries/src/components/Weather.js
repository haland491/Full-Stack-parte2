import React from 'react'

const Weather=(props)=>{

	const {pais}=props
	const {apiresponse}=props
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

 				<h1>Weather in {apiresponse.location.name}</h1>
 				<p>temperature:{apiresponse.current.temperature} Celcius</p>
				<div><img src={apiresponse.current.weather_icons[0]}></img></div>
				<p>wind:{apiresponse.current.wind_speed} mph direction: {apiresponse.current.wind_dir}</p>
			</div>
			)
		
	}
export default Weather

		
 		












