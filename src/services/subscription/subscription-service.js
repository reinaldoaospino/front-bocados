import bocadosApi from '../../apis/bocadosApis';
import { GetToken } from '../token/token-service';

export const CreateSubscription = async (subscriptionData) => {
    var tokenTask = GetToken();

    const data = JSON.stringify({
        "Email": subscriptionData,
    })

    var token = await tokenTask;

    const response = await bocadosApi.post('/api/subscription', data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    return response;
}
