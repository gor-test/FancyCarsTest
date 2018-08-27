import type { TAppState } from '../../../store/types';
import type { TResources } from '../../../store/resources/types';

export const allResourcesSelector = (state: TAppState): TResources => state.resources.data;

export const isListRequesting = (state: TAppState): TResources => state.resources.loading;
export const isListReloading = (state: TAppState): TResources => state.resources.refreshing;
