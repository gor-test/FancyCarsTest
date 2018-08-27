import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export const ListFooter = () => {
  return (
    <View>
      <ActivityIndicator animating size="large" />
    </View>
  );
};
