import request from '../utils/request';
import qs from 'qs';

export async function query(params) {
    // return request(`/api/users?${qs.stringify(params)}`);
    return request(`http://127.0.0.1:8080/order`);
}

export async function create(params) {
  return request('/api/users', {
    method: 'post',
    body: qs.stringify(params),
  });
}

export async function remove(params) {
  return request('/api/users', {
    method: 'delete',
    body: qs.stringify(params),
  });
}

export async function update(params) {
  return request('/api/users', {
    method: 'put',
    body: qs.stringify(params),
  });
}
