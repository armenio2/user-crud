import axios from 'axios';

export default async function GetList() {
    return axios.get(`https://private-21e8de-rafaellucio.apiary-mock.com/users`).then(res => res.data)
}