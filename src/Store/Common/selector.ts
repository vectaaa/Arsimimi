import type {RootState} from '../index';

export const getAsyncError = (state: RootState) => state.common.asyncError;

export const getPendingRequests = (state: RootState) =>
  state.common.pendingRequests;

export const getIsOpaqueLoaderVisible = (state: RootState) =>
  state.common.isOpaqueLoaderVisible;
