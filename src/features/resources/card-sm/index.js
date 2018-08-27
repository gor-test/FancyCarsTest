import React from 'react';
import { ListItem } from 'react-native-elements';


export const ResourceCardSm = (props: Object) => {
  // console.log({ props });
  const { item, onPress } = props;
  const { build = {}, media = {} } = item;
  const { year, make, model } = build;
  const { photo_links: photoLinks = [] } = media;
  return (
    <ListItem
      roundAvatar
      title={item.heading}
      subtitle={`${year} - ${make} ${model}`}
      avatar={{ uri: photoLinks[0] }}
      hideChevron
      onPress={onPress}
    />
  );
};
