import axios from "axios";

const url = "http://localhost:3003/users";
// const url = "https://my-json-server.typicode.com/mohammadfaizan179/crud-server/users";
export const allUsers  = async (id) =>{
    id = id || "";
    return await axios.get(`${url}/${id}`);
}
export const addUsers  = async(user) =>{
    // console.log("addUsers Called inside api")
    // console.log(user);
    return await axios.post(url,user);
}
export const editUsers  = async(id, user) =>{
    return await axios.put(`${url}/${id}`, user);
}

export const deleteUser  = async(id) =>{
    console.log("deleteUser", id)
    return await axios.delete(`${url}/${id}`);
}

