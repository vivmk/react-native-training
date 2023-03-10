import React from 'react';
import {FlatList, View} from 'react-native';

import {sampleData} from './constants';
import ListRender, {ListRenderProps} from './ListRender';

interface LandingScreenProps {
  message: string;
}

const FirstScreen: React.FC<LandingScreenProps> = (
  props: LandingScreenProps,
) => {
  const {message} = props;

  const renderListItem = ({item}: {item: ListRenderProps}) => {
    return <ListRender item={item} />;
  };

  return (
    <View style={{flex: 1}}>
      <FlatList data={sampleData} renderItem={renderListItem} />
    </View>
  );
};

export default FirstScreen;
