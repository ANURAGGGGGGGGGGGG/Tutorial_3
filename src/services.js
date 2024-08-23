import axios from "axios";
const url = "http://localhost:4200/todo"

const getTodoDataApi = async() => {
return await axios.get(url)
}

const postTodoDataApi = async(data) => {
    return await axios.post(url, data)
}

const deleteTodoDataApi = async(id) => {
    return await axios.delete(`${url}/${id}`)
}

const markDoneTodoDataApi = async (id , data) => {
    return await axios.patch(`${url}/${id}` , data)
}

export {getTodoDataApi ,postTodoDataApi ,deleteTodoDataApi , markDoneTodoDataApi }