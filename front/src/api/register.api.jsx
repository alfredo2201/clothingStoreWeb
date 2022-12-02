import axios from 'axios'

export const registerItem = async(data) =>{
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('token')
    }
    console.log(data);
    // return await axios.post(`http://localhost:3000/item`,data, {
    //     headers: headers
    // })
}