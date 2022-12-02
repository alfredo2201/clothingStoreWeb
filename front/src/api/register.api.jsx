import axios from 'axios'

export const registerItem = async (data) => {
    const headers = {
        'Content-Type': 'multipart/form-data',
        "Accept": "application/json",
        "type": "formData",
        'Authorization': window.localStorage.getItem('token')
    }
    // console.log('->',data[1]);
    const sizes = data.get('size').split(',')
    console.log('z->', sizes)
    // console.log({
    //     name: data.get('name'),
    //     price: data.get('price'),
    //     stock: data.get('stock'),
    //     category: data.get('category'),
    //     size: s,
    //     imgItem: data.get('imgItem')
    // });
    sizes.map(async (s) => {
        console.log('en map->', s);
        await axios.post(`http://localhost:3000/item`, {
            name: data.get('name'),
            price: data.get('price'),
            stock: data.get('stock'),
            category: data.get('category'),
            size: s,
            imgItem: data.get('imgItem')
        },
            {
                headers: headers
            }
        )
    })
    return 'success';

    // const headers2 = {
    //     'Content-Type': 'multipart/form-data',
    //     'authorization': window.localStorage.getItem('token')
    // }
    // console.log(listId)
    // listId.map(async(i) => {
    //     console.log('a')
    //     await axios.patch(`http://localhost:3000/item/upload/${i}`, {
    //         imgItem: data.imageItem
    //     },{
    //         headers: headers2
    //     })
    // })
}