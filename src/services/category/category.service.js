import bocadosApi from '../../apis/bocadosApis';
import { GetToken } from '../token/token-service';
const endPoint = '/api/category';

export const GetCategory = async () => {
    var token = await GetToken();

    const response = await bocadosApi.get(endPoint, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    return response.data;
}
