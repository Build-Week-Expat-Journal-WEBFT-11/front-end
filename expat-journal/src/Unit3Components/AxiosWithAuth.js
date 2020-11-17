import axios from 'axios';

export let axiosWithAuth = function(){
    let token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://expat-journal-backend2.herokuapp.com/api',
        headers: {
            authorization: token
        }
    })
}