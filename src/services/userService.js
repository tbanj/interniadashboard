import http from './httpService.js';
import localStorage from '../localstorage/Storage.js';
import env from "../env";


const ls = new localStorage();

let ade;
const userEndpoint = `${env.userApi}`;


export async function userDatas() {
    const { data } = await http.get(userEndpoint);
    return data;
}






// export const derm = async () => {
//     let newList = [];
//     let count = 0;
//     const checkData = "url";
//     const { data } = await http.get(userEndpoint);
//     console.log(typeof data, "adeeee");
//     let dee = [];
//     data.forEach(async spreadlist => {
//         const urlData = spreadlist[checkData];
//         let { data: userInfo } = await http.get(urlData);
//         if (userInfo['bio'] !== null && userInfo['company'] !== null && count < 5) {
//             newList.push(userInfo)

//             // ade = storeImage(userInfo);
//             // count++;
//         }
//         ls.storeItem(newList);
//     });



// }