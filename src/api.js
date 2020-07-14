import axios from 'axios';


export const instance = axios.create({
baseURL: 'http://' + (process.env.BACK_HOST || 'localhost') + ':' + (process.env.BACK_PORT || '8000')

});
