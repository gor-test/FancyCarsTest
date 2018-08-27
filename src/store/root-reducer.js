import { combineReducers } from 'redux';
import { resourcesReducer, initialResourcesState } from './resources/reducer';
import { availabilityReducer, initialAvailabilityState } from './availability/reducer';

export const initialState: TAppState = {
  resources: initialResourcesState,
  availability: initialAvailabilityState,
};

const makeRootReducer = () => {
  return combineReducers({
    resources: resourcesReducer,
    availability: availabilityReducer,
  });
};

export const rootReducer = makeRootReducer();
