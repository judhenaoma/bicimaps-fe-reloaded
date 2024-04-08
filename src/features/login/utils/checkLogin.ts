// import axios from 'axios';
import { axios } from '@/lib/axios';
import { LoginData } from '../types';


async function checkLogin(URL : string, loginData : LoginData) {
        const parsedLoginData = JSON.stringify(loginData);
        const { data } = await axios.post(URL, parsedLoginData, {
                        headers : {'Content-Type': 'application/json'}, 
                        withCredentials: true
                    })
        return data
}

export { checkLogin }