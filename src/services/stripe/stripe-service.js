import bocadosApi from '../../apis/bocadosApis';
import { GetToken } from '../token/token-service';

export const CreatePayment = async (paymentObject) => {
    var token = await GetToken();

    const data = JSON.stringify(paymentObject);

    const response = await bocadosApi.post('/api/stripe', data, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    })
 
    return response.data;
}
