import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const instructions = 'No data loaded!!!\n'
  + 'Pull down to refresh,';

export const ErrorCard = () => {
  return (
    <View>
      <Text style={styles.instructions}>{instructions}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
