import R from 'ramda';
import {
  all, takeLatest, select, call, put,
} from 'redux-saga/effects';
import {
  FETCH_HOMEPAGE_LIST,
  getHomePageListAction,
} from './actions';
import { allResourcesSelector } from './selectors';
import { fetchHomePageList } from '../../../api/resources';
import { saveListData, getListData } from '../../../api/offline';
import { TSuccessAction } from '../../../store/types';

export const LIST_PAGE_SIZE = 20;

export function* getHomepageListActionWatcher(): Generator<*, *, *> {
  yield all([
    takeLatest(FETCH_HOMEPAGE_LIST.REQUEST, getHomePageList),
    takeLatest(FETCH_HOMEPAGE_LIST.SUCCESS, saveListOffline),
  ]);
}

export function* saveListOffline(action: TSuccessAction): Generator<*, *, *> {
  const { payload } = action;
  if (payload.offlineDataSavedOn) return;
  const list = yield select(allResourcesSelector);
  const dataToSave = {
    payload: list,
    timeRetrieved: new Date(),
  };
  yield saveListData(dataToSave);
}

export function* getHomePageList({ params = {} }): Generator<*, *, *> {
  const { refresh, sortBy, sortOrder } = params;
  const list = yield select(allResourcesSelector);
  const response: any = yield call(
    fetchHomePageList,
    {
      top: LIST_PAGE_SIZE,
      skip: refresh ? 0 : list.length,
      sortBy,
      sortOrder,
    },
  );
  if (!response || !response.data) {
    if (!response || response.problem === 'NETWORK_ERROR') {
      const offlineData = yield getListData();
      if (offlineData && offlineData.payload) {
        yield put(getHomePageListAction.success(
          {
            data: offlineData.payload,
            refresh: true,
            offlineDataSavedOn: offlineData.timeRetrieved,
          },
        ));
        return;
      }
    }
    const error = response ? response.originalError : null;
    yield setHomePageListError(error);
    return;
  }
  const { data } = response;
  if (R.isEmpty(response.data) || data.num_found === 0
    || R.isNil(data.listings) || R.isEmpty(data.listings)) {
    yield setHomePageListError(new Error('Response is empty'));
    return;
  }
  yield put(getHomePageListAction.success({ data: response.data.listings, refresh }));
}

export function* setHomePageListError(error: Error): Generator<*, *, *> {
  yield put(getHomePageListAction.failure(error));
}
