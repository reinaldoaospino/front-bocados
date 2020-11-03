import bocadosApi from '../../apis/bocadosApis';
import { GetToken } from '../token/token-service';

export const GetProducts = async () => {
    var token = await GetToken();

    const response = await bocadosApi.get('/api/product', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    return response.data;
}
