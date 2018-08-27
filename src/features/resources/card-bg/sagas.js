import R from 'ramda';
import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';

import { getResourceAvailability } from '../../../api/resources';
import { getAvailabilityAction, GET_AVAILABILITY } from './action';

export function* getAvailabilityActionWatcher(): Generator<*, *, *> {
  yield all([
    takeLatest(GET_AVAILABILITY.REQUEST, getAvailability),
  ]);
}
export function* getAvailability({ params = {} }): Generator<*, *, *> {
  const { id } = params;
  const response: any = yield call(
    getResourceAvailability, { id },
  );
  if (!response || !response.data || R.isEmpty(response.data)) {
    const error = response ? response.originalError || new Error('Error retreiving availability') : null;
    yield setAvailabilityError(error);
    return;
  }
  const { data } = response;
  const { available: isAvailable } = data;
  yield put(getAvailabilityAction.success({ isAvailable, id }));
}

export function* setAvailabilityError(error: Error): Generator<*, *, *> {
  yield put(getAvailabilityAction.failure(error));
}
