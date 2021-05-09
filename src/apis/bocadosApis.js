import axios from 'axios';

export default axios.create({
    baseURL: 'https://api-bocados20210508123043.azurewebsites.net',
    headers:{
        'Content-Type': 'application/json',
    }
});
