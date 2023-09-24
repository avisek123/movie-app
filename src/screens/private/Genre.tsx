import {ListRenderItem, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Box, Center, Pressable, Row, Text} from 'native-base';
import {useNavigation, useRoute} from '@react-navigation/native';
import {MovieType, PrivateRootRouteProps} from 'types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {MOVIES} from '../../constants';
import {FlatList} from 'react-native';
import {Empty, MovieCard} from 'components';
const Genre = () => {
  const {goBack} = useNavigation();
  const {params} = useRoute<PrivateRootRouteProps<'Genre'>>();
  const [movies, setMovies] = React.useState<MovieType[]>([]);
  useEffect(() => {
    const filterByGenre = () => {
      const data = MOVIES.filter(movie => movie.Genre.includes(params?.type));
      setMovies(data);
    };

    filterByGenre(); // Call the filter function
  }, [params?.type]);
  const renderItem: ListRenderItem<MovieType> = ({item}) => {
    // Render each item here
    return <MovieCard item={item} />;
  };
  const renderEmptyComponent = () => {
    // Render actual empty component when data is fetched and empty
    return <Empty />;
  };
  return (
    <Box flex={1} backgroundColor={'#000'}>
      <Row mb={5} mt={7}>
        <Pressable flex={0.5} ml={5} onPress={goBack}>
          <MaterialIcons name="arrow-back" size={25} color="#fff" />
        </Pressable>
        <Text ml={3} fontWeight={'bold'} fontSize={19} color={'#fff'}>
          {params?.type}
        </Text>
      </Row>
      <Center>
        <FlatList
          data={movies}
          contentContainerStyle={styles.container}
          renderItem={renderItem}
          ListEmptyComponent={renderEmptyComponent}
        />
      </Center>
    </Box>
  );
};

export default Genre;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
  },
});
