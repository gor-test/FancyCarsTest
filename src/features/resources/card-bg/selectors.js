import type { TAppState } from '../../../store/types';

export const availabilitySelector = (state: TAppState, props: Object): ?boolean => {
  const { item } = props;
  const { id } = item;
  return state.availability.byId[id];
};

export const availabilityLoadingSelector = (state: TAppState): ?boolean => {
  return state.availability.loading;
};
