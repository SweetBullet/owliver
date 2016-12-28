import request from '../utils/request';
import qs from 'qs';

export async function queryShotMessageAmount(params) {
    return request(`http://127.0.0.1:8080/shotMessage?${qs.stringify(params)}`);
}
