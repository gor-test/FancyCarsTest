import React from 'react';
import { View, FlatList } from 'react-native';
import { List } from 'react-native-elements';
import { ListFooter } from '../list-footer';
import { ErrorCard } from '../error-card';
import { ResourceCardSm } from '../card-sm';
import { ResourceCardBg } from '../card-bg';

type Props = {
  fetchHomePageList: () => void,
  resources: [],
  isLoading: boolean,
  isRefreshing: boolean
}

export class ResourceList extends React.PureComponent<Props> {
  state = {
    selected: null,
  }

  static getDerivedStateFromProps(props, state) {
    const { isRefreshing = false } = props;
    return isRefreshing ? { selected: false } : state;
  }

  onPressAction = (id: string) => {
    this.setState((state) => {
      const selected = (state.selected === id) ? null : id;
      return { selected };
    });
  }

  renderRow = (item) => {
    const { selected } = this.state;
    const cardSelected = selected === item.id;
    return cardSelected
      ? (
        <ResourceCardBg
          item={item}
          onPress={() => this.onPressAction(item.id)}
          selected={cardSelected}
        />
      )
      : (
        <ResourceCardSm
          item={item}
          onPress={() => this.onPressAction(item.id)}
          selected={cardSelected}
        />
      );
  }

  renderFooter = () => {
    const {
      resources = [],
      isLoading,
    } = this.props;
    const isEmpty = resources.length === 0;
    return (!isLoading || isEmpty)
      ? null
      : (<ListFooter />);
  }

  render() {
    const {
      resources = [],
      isLoading = false,
      isRefreshing = false,
      fetchHomePageList,
    } = this.props;
    return (
      <View style={{ flex: 1, alignSelf: 'stretch' }}>
        <List>
          <FlatList
            style={{ height: '100%' }}
            data={resources}
            extraData={this.state}
            keyExtractor={item => item.id}
            renderItem={({ item }) => this.renderRow(item)}
            ListFooterComponent={this.renderFooter}
            ListEmptyComponent={isLoading ? null : ErrorCard}
            refreshing={isRefreshing || isLoading}
            onEndReachedThreshold={1}
            onEndReached={fetchHomePageList}
            onRefresh={() => {
              this.onPressAction(null);
              fetchHomePageList({ refresh: true });
            }
            }
          />
        </List>
      </View>
    );
  }
}
