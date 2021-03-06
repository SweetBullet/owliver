import request from '../utils/request';
import qs from 'qs';

export async function query(params) {
    return request(`http://127.0.0.1:8080/message?${qs.stringify(params)}`);
}
