import axios from 'axios'
export const login = async (email, password) => {
    try {
        return await axios.post('http://localhost:3000/auth/login', {
            email, password
        })
        // console.log('no explotó, next', data)
        // window.localStorage.setItem('token', JSON.stringify(data.data.token));
        // console.log('se asigno el token', data.token);
    } catch (error) {
        console.log('Error:', error);
        // alert(error.response.data.message);
    }
    // window.localStorage().setItem(key, data.data.token)
}