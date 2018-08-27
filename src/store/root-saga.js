import { fork, all } from 'redux-saga/effects';
import { getHomepageListActionWatcher } from '../features/home/car-list/sagas';
import { getAvailabilityActionWatcher } from '../features/resources/card-bg/sagas';

export function* rootSaga(): Generator<any, any, any> {
  yield all([
    fork(getHomepageListActionWatcher),
    fork(getAvailabilityActionWatcher),
  ]);
}
