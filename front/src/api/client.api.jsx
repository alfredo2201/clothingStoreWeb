import axios from "axios"
export const updateClient = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('token')
    }
    // console.log('id->',data.id)
    return axios.put(`http://localhost:3000/client/${data.id}`, data, {
        headers: headers
    })
}

export const registerClient = async(data) =>{
    const headers = {
        'Content-Type': 'multipart/form-data',
        "Accept": "application/json",
        "type": "formData",
    }
    console.log(data)
    return await axios.post('http://localhost:3000/client', data,
    // {
    //     headers: headers
    // }
    )
}