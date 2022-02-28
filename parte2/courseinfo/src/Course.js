import React from 'react';

const Header=(props)=>{
	const {curso} = props
	return(
		<div>
			 <li>{curso.name}</li>
			 <Content curso={curso}/>
			 
		</div>
		)
}
const Content=(props)=>{
	const {curso} = props
	return(
		<div>
			<ul>
				{curso.parts.map(partes=>(
			 	<li key={partes.id}>{partes.name} {partes.exercises}</li>
			))}
				<Total curso={curso}/>
			</ul>
		</div>
		)


}
const Total=(props)=>{
	console.log(props)
	const {curso}=props
	const sum=curso.parts.reduce((acc, elem) => {
		console.log('que pasa', acc, elem)
		return acc + elem.exercises
	},0)
	return <p> El total de Ejercicios es {sum} </p>
}
const Course=(props)=>{
	console.log(props)
	const { courses } = props
	return (
    <div>
    	<h1>WEB DEVELOPMENT CURRICULUM</h1>
    	<ul>
    	 
    		{courses.map(curso=>(
    		<Header key={curso.id} curso={curso}/>
    		))}
    	</ul>
            	      		
   </div>
  )

}
export default Course
