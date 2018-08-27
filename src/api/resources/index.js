import { createApiRequest } from '../../utils/api/request';
import { ENDPOINTS } from '../../utils/api/constants';

export function fetchHomePageList(params: Object): Object {
  const {
    top,
    skip,
    sortBy,
    sortOrder,
  } = params;
  const requestParams = {
    rows: top,
    start: skip,
    sort_by: sortBy,
    sort_order: sortOrder,
  };
  const api = createApiRequest();
  return api.get(ENDPOINTS.cars, requestParams);
}

export function getResourceAvailability(id: string): Object {
  // const requestParams = {
  //   id,
  // };
  // const api = createApiRequest();
  // return api.get(ENDPOINTS.availability, requestParams);
  const res = {
    ok: true,
    data: {
      id,
      available: Math.random() >= 0.3,
    },
  };
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res);
    }, 500);
  });
}
