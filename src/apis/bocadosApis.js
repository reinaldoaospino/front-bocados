import axios from 'axios';

export default axios.create({
    baseURL: 'https://api-bocados.azurewebsites.net',
    headers:{
        'Content-Type': 'application/json',
    }
});
