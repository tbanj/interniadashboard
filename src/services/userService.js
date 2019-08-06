import http from './httpService.js';
import env from "../env";


const userEndpoint = `${env.userApi}`;


export async function userDatas() {
    const { data } = await http.get(userEndpoint);
    return data;
}





