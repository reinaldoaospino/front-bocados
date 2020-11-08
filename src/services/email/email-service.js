import bocadosApi from '../../apis/bocadosApis';
import { GetToken } from '../token/token-service';

export const SendEmail = async (emailData) => {
    var tokenTask = GetToken();

    const data = JSON.stringify({
        "Name": emailData.name,
        "LastName": emailData.lastName,
        "EmailAddres": emailData.email,
        "Subject": emailData.subject,
        "Message": emailData.message,
    })

    var token = await tokenTask;

    const response = await bocadosApi.post('/api/email/send', data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    return response;
}
