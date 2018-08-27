import { createRequestTypes, asyncActionCreators } from '../../../utils/api/actions';

export const FETCH_HOMEPAGE_LIST = createRequestTypes('FETCH_HOMEPAGE_LIST');
export const getHomePageListAction = asyncActionCreators(FETCH_HOMEPAGE_LIST);
