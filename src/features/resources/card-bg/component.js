import React from 'react';
import {
  Text, Button, Alert, ActivityIndicator,
} from 'react-native';
import { Card } from 'react-native-elements';

export class ResourceCardBg extends React.PureComponent<Props> {
  componentDidMount() {
    const { getAvailability, item } = this.props;
    const { id } = item;
    getAvailability({ id });
  }

  render() {
    const {
      item, onPress,
      isAvailableForSale,
      isAvailabilityLoading,
    } = this.props;
    const {
      build = {}, media = {}, price, dealer = {},
    } = item;
    const { year, make, model } = build;
    const { photo_links: photoLinks = [] } = media;
    const photoUri = photoLinks[0];
    const alertMessageText = isAvailableForSale
      ? `To buy ${year} - ${make} ${model} please contact ${dealer.name} ${dealer.phone || ''}`
      : 'Sorry the car is gone, please check the list for other great cars';
    const titleText = isAvailableForSale ? 'BUY NOW!' : 'SOLD OUT.';

    return (
      <Card
        title={item.heading}
        image={{ uri: photoUri }}
        onPress={onPress}
      >
        <Text style={{ marginBottom: 10 }}>
          {`${year} - ${make} ${model}\n$${price}`}
        </Text>
        {isAvailabilityLoading && <ActivityIndicator />}
        {!isAvailabilityLoading && (
        <Button
          title={titleText}
          onPress={() => {
            Alert.alert(titleText,
              alertMessageText);
          }}
        />
        )}
      </Card>
    );
  }
}
