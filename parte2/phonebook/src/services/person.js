import axios from 'axios'
const baseUrl='http://localhost:63630/persons'

const getAll=()=>{
	return axios.get(baseUrl)
}
const create=(newObj)=>{
	return axios.post(baseUrl,newObj)
}

export default {
getAll:getAll,
create:create
}
