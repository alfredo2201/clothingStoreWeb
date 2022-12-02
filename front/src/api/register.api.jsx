import axios from 'axios'

export const registerItem = async (data) => {
    const token = window.localStorage.getItem('token')
    const headers = {
        'Content-Type': 'application/json',
        'authorization': window.localStorage.getItem('token')
    }
    const imgURL = '';
    const listId = []
    data.size.map(async (s) => {
        const result = await axios.post(`http://localhost:3000/item`, {
            name: data.name,
            price: data.price,
            stock: data.stock,
            category: data.category,
            size: s
        }, {
            headers: headers
        })
        console.log(result);
        listId.push(result.idItem);
    })

    // const headers2 = {
    //     'Content-Type': 'multipart/form-data',
    //     'authorization': window.localStorage.getItem('token')
    // }

    // listId.map(async(i) => {
    //     await axios.patch(`http://localhost:3000/item/upload/${i}`, {
    //         imgItem: data.imageItem
    //     },{
    //         headers: headers2
    //     })
    // })

}