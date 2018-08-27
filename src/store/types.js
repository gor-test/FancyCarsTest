import type { TResources } from './resources/types';

export type TPayload = any;

export type TAppState = {
  resources: TResources;
  // user: TUser,
};

export type TAsyncActions = {
  REQUEST: string,
  SUCCESS: string,
  FAILURE: string,
};

export type TRequestAction = {
  type: string,
  params: any,
};

export type TSuccessAction = {
  type: string,
  payload: TPayload,
};

export type TFailureAction = {
  type: string,
  error: any,
};
