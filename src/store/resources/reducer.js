import { createReducer } from 'reduxsauce';
import R from 'ramda';
import { FETCH_HOMEPAGE_LIST } from '../../features/home/car-list/actions';

import type { TRequestAction, TSuccessAction } from '../types';

export const initialResourcesState: TResourcesState = {
  loading: false,
  refreshing: false,
  error: {},
  data: [],
};

const startLoading = (state, { params }: TRequestAction) => R.merge(state, {
  loading: true,
  refreshing: R.propOr(false, 'refresh', params),
});

const successLoading = (state, action: TSuccessAction) => {
  const data = R.pathOr(false, ['payload', 'refresh'], action)
    ? action.payload.data
    : R.concat(state.data, action.payload.data);
  return R.merge(state, {
    error: {},
    loading: false,
    refreshing: false,
    data,
  });
};

const errorLoading = (state, error: Object) => R.merge(state, {
  loading: false,
  refreshing: false,
  error,
});

const handlers = {
  [FETCH_HOMEPAGE_LIST.REQUEST]: startLoading,
  [FETCH_HOMEPAGE_LIST.SUCCESS]: successLoading,
  [FETCH_HOMEPAGE_LIST.FAILURE]: errorLoading,
};

export const resourcesReducer = createReducer(initialResourcesState, handlers);
