import {FlatList, ListRenderItem, StyleSheet, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Box, Center} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from './Header';
import {MOVIES} from '../../../constants';
import {Empty, MovieCard} from 'components';
import {MovieType} from 'types';
import {COLORS} from 'styles';

const Home = () => {
  const [searchTxt, setSearchTxt] = useState('');
  const [searchRes, setSearchRes] = useState(() => MOVIES);
  useEffect(() => {
    if (searchTxt) {
      const resArr = MOVIES?.filter(item =>
        item?.Title?.toLowerCase().includes(searchTxt.toLowerCase()),
      );
      setSearchRes(resArr);
    } else {
      setSearchRes(MOVIES);
    }
  }, [searchTxt]);

  const renderItem: ListRenderItem<MovieType> = ({item}) => {
    // Render each item here
    return <MovieCard item={item} />;
  };
  const renderEmptyComponent = () => {
    // Render actual empty component when data is fetched and empty
    return <Empty />;
  };
  return (
    <Box flex={1} safeArea backgroundColor={'#000'}>
      <Box p={4}>
        <Header />
        <Box
          mt={5}
          borderRadius={10}
          flexDirection={'row'}
          backgroundColor={COLORS.black_fade}
          width={'100%'}
          alignItems={'center'}
          h={10}>
          <Ionicons
            name="search-outline"
            color={'gray'}
            style={{
              marginLeft: 15,
            }}
            size={21}
          />
          <TextInput
            value={searchTxt}
            style={{
              color: 'gray',
            }}
            onChangeText={txt => setSearchTxt(txt)}
            placeholderTextColor={'gray'}
            placeholder="search your favourite movie..."
          />
        </Box>
      </Box>
      <Center>
        <FlatList
          data={searchRes}
          contentContainerStyle={styles.container}
          renderItem={renderItem}
          ListEmptyComponent={renderEmptyComponent}
        />
      </Center>
    </Box>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 200,
  },
});
