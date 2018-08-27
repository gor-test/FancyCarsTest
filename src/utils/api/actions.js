import {
  TAsyncActions,
  TPayload,
} from '../../store/types';

const REQUEST = 'REQUEST';
const START = 'START';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export const createRequestTypes = (base: string) => [REQUEST, START, SUCCESS, FAILURE]
  .reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});

export const asyncActionCreators = (asyncActions: TAsyncActions) => ({
  request: (params: any) => ({ type: asyncActions.REQUEST, params }),
  success: (payload: TPayload) => ({ type: asyncActions.SUCCESS, payload }),
  failure: (error: Object) => ({
    type: asyncActions.FAILURE,
    error: {
      name: error.name,
      message: error.message,
      stack: error.stack,
      status: error.status,
    },
  }),
});
