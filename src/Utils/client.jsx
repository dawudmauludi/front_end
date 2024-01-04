import axios from 'axios';
import { sessionToken } from '../Constant/localStorage';



const client = axios.create({
    baseURL : 'http://127.0.0.1:8000/api/v1',
    // params: {
    //     login_tokens: localStorage.getItem(sessionToken)
    // }
})

client.interceptors.request.use((config)=>{
    config.params= {
        login_tokens: localStorage.getItem(sessionToken)
    }

    return config
})

export default client