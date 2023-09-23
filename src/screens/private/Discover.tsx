import {Image, ListRenderItem, StyleSheet, View} from 'react-native';
import React from 'react';
import {Box, Row, Text} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FlatList} from 'react-native';
import {GENRE} from '../../constants';
import {MovieGenre} from 'types';
import {GenreCard} from 'components';
const Discover = () => {
  const renderItem: ListRenderItem<MovieGenre> = ({item, index}) => {
    // Render each item here
    return <GenreCard item={item} index={index} />;
  };
  const SeparatorComponent = () => (
    <Box backgroundColor={'#19191B'} mt={3} height={0.5} width={'100%'} />
  );
  return (
    <Box flex={1} backgroundColor={'#000'}>
      <Text ml={3} mt={5} fontWeight={'bold'} fontSize={19} color={'#fff'}>
        Discover
      </Text>
      <FlatList
        data={GENRE}
        contentContainerStyle={styles.container}
        renderItem={renderItem}
        ItemSeparatorComponent={SeparatorComponent}
      />
    </Box>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
  },
});
