import React from 'react';
import { View } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { Header } from 'react-native-elements';
import { ResourceList } from '../../resources/resource-list';

import { SORT_OPTIONS, SORT_DEFAULT, API_SORT_VALUES } from './constants';

type Props = {
  fetchHomePageList: () => void,
  resources: [],
  isLoading: boolean,
  isRefreshing: boolean
}

export class HomePageList extends React.PureComponent<Props> {
  state = {
    sortParams: API_SORT_VALUES[SORT_DEFAULT],
  }

  componentDidMount() {
    const { fetchHomePageList } = this.props;
    const { sortParams } = this.state;
    fetchHomePageList({ ...sortParams });
  }

  renderHeader = () => {
    const { fetchHomePageList } = this.props;
    return (
      <ModalDropdown
        options={SORT_OPTIONS}
        defaultIndex={SORT_DEFAULT}
        defaultValue={SORT_OPTIONS[SORT_DEFAULT]}
        onSelect={(rowID) => {
          const sortParams = API_SORT_VALUES[rowID];
          fetchHomePageList({ ...sortParams, refresh: true });
          this.setState(() => {
            return { sortParams };
          });
        }}
      />
    );
  }

  renderOfflineMessage = () => {
    return null;
  }

  render() {
    const {
      resources = [],
      isLoading = false,
      isRefreshing = false,
      fetchHomePageList,
    } = this.props;
    const { sortParams } = this.state;
    return (
      <View style={{ flex: 1, alignSelf: 'stretch' }}>
        <Header rightComponent={this.renderHeader()} />
        {this.renderOfflineMessage()}
        <ResourceList
          isLoading={isLoading}
          isRefreshing={isRefreshing}
          resources={resources}
          fetchHomePageList={params => fetchHomePageList({ ...sortParams, ...params })}
        />
      </View>
    );
  }
}
