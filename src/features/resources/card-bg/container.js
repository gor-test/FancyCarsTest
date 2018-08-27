import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ResourceCardBg } from './component';
import { getAvailabilityAction } from './action';
import { availabilitySelector, availabilityLoadingSelector } from './selectors';

const mapStateToProps = createStructuredSelector({
  isAvailableForSale: availabilitySelector,
  isAvailabilityLoading: availabilityLoadingSelector,
});

const mapDispatchToProps = {
  getAvailability: getAvailabilityAction.request,
};

export const ResourceCardBgContainer = connect(mapStateToProps, mapDispatchToProps)(ResourceCardBg);
