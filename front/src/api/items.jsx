import axios from "axios"

export const fetchItems = async () =>{
    return await axios.get("http://127.0.0.1:3000/items")
    .catch((err) =>{
        if (err.code === 404)
        throw new Error('Not Found')
    })
    .then(res => res.data)   
}

export const deleteProduct = async(id) =>{
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('token')
    }

    return await axios.delete(`http://localhost:3000/item/${id}`,{
        headers: headers
    })
}