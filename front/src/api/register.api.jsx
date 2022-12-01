import axios from 'axios'

export const registerItem = async(data) =>{
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('token')
    }

    return await axios.post(`http://localhost:3000/item`,data, {
        headers: headers
    })
}