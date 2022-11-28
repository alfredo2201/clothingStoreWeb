import axios from 'axios'

export const registerItem = async(data) =>{
    // image =  await axios.get(`localhost:3000/item/${10}`)
    // return `localhost:3000/${image.img}`
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('token')
    }

    return await axios.post(`http://localhost:3000/item`,data, {
        headers: headers
    })
    // return await axios.post(`localhost:3000/item`
    // ,data,
    // {
    //     headers: headers
    // }
    // )
}