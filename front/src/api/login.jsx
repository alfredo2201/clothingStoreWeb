import axios from 'axios'
export const login = async (email, password) => {
    // try {
        return await axios.post('http://localhost:3000/auth/login', {
            email, password
        })
    // } catch (error) {
    //     console.log('Error:', error);
    // }
}