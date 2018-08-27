import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { HomePageList } from './component';
import { allResourcesSelector, isListRequesting, isListReloading } from './selectors';
import { getHomePageListAction } from './actions';

const mapStateToProps = createStructuredSelector({
  resources: allResourcesSelector,
  isLoading: isListRequesting,
  isRefreshing: isListReloading,
});

const mapDispatchToProps = {
  fetchHomePageList: getHomePageListAction.request,
};

export const HomePageListContainer = connect(mapStateToProps, mapDispatchToProps)(HomePageList);
