import axios from 'axios'
const baseUrl  = '/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (person) => {
    console.log(baseUrl, person)
    const request = axios.post(baseUrl, person)
    return request.then(response => response.data)
}
const poista = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}



export default { getAll, create, poista }