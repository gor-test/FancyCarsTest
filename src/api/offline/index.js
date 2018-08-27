import { AsyncStorage } from 'react-native';

const DATA_KEY = 'ResourceListWInfo';

export function saveListData(data: Object) {
  return AsyncStorage.setItem(DATA_KEY, JSON.stringify(data));
}

export function getListData() {
  return AsyncStorage.getItem(DATA_KEY)
    .then(offlineData => (offlineData ? JSON.parse(offlineData) : null));
}
