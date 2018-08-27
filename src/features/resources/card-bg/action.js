import { createRequestTypes, asyncActionCreators } from '../../../utils/api/actions';

export const GET_AVAILABILITY = createRequestTypes('GET_AVAILABILITY');
export const getAvailabilityAction = asyncActionCreators(GET_AVAILABILITY);
