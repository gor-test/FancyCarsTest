import { create } from 'apisauce';
// import { Buffer } from 'buffer';
import { API_CONSTANTS, BASE_URL } from './constants';

export function createApiRequest() {
  const config = getAxiosConfig();
  return create(config);
}

function getAxiosConfig(): Object {
  const config = {
    baseURL: BASE_URL,
    headers: {
      ...getCommonApiHeaders(),
      'Content-Type': 'application/json',
    },
    timeout: API_CONSTANTS.timeout,
    params: {
      api_key: 'oW1gJdmnWktEBp48d7HAEOnw9be0GT0C',
      // car_type: 'new',
      price_range: '120000 - 800000',
    },
  };
  return config;
}

export function getCommonApiHeaders(): Object {
  const headers = {
    // add common headers here, like auth info, device id or timezone info
  };
  return headers;
}

// export function getAuthorizationHeader(username, password) {
//   const buffer = new Buffer(`${username}:${password}`);
//   const encodedCredentials = buffer.toString('base64');
//   return `Basic ${encodedCredentials}`;
// }
