import { createReducer } from 'reduxsauce';
import R from 'ramda';
import { GET_AVAILABILITY } from '../../features/resources/card-bg/action';

import type { TSuccessAction } from '../types';

export const initialAvailabilityState: TAvailabilityState = {
  loading: false,
  error: {},
  byId: {},
};

const startLoading = state => R.merge(state, {
  loading: true,
});

const successLoading = (state, action: TSuccessAction) => {
  const { payload } = action;
  const { isAvailable, id } = payload;
  return R.assocPath(['byId', id], isAvailable,
    R.merge(state, {
      error: {},
      loading: false,
    }));
};

const errorLoading = (state, error: Object) => R.merge(state, {
  loading: false,
  error,
});

const handlers = {
  [GET_AVAILABILITY.REQUEST]: startLoading,
  [GET_AVAILABILITY.SUCCESS]: successLoading,
  [GET_AVAILABILITY.FAILURE]: errorLoading,
};

export const availabilityReducer = createReducer(initialAvailabilityState, handlers);
