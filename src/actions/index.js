
import axios from 'axios';

// najeeb@guesty.com

const API_KEY = '1b1dc1b752c13c80';
const client = axios.create({
    baseURL: `http://api.wunderground.com/api/${API_KEY}/forecast10day/q`,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default client;
