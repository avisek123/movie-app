import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {Box, Icon, Image, Pressable, Row, Text, VStack} from 'native-base';
import {useNavigation, useRoute} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {MovieType, PrivateRootRouteProps} from 'types';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {MOVIES} from '../../../constants';
import MovieInfo from './MovieInfo';

const MovieDetails = () => {
  const {goBack} = useNavigation();
  const {params} = useRoute<PrivateRootRouteProps<'MovieDetails'>>();
  const ID = params?.imdbID;
  const [movieDetails, setMovieDetails] = React.useState<MovieType>();
  useEffect(() => {
    const filterByImdbID = () => {
      const data = MOVIES?.find(item => item.imdbID === ID);
      setMovieDetails(data);
    };

    filterByImdbID(); // Call the filter function
  }, [ID]);

  return (
    <Box flex={1} backgroundColor={'#000'}>
      <Pressable mt={10} ml={5} onPress={goBack}>
        <MaterialIcons name="arrow-back" size={25} color="#fff" />
        <MovieInfo movieDetails={movieDetails} />

        <TouchableOpacity style={styles.btn}>
          <Row alignSelf={'center'} mt={1}>
            <Icon
              alignSelf={'center'}
              as={MIcon}
              mr={3}
              name="play"
              color="#fff"
              size="lg"
            />
            <Text color={'#fff'} bold textAlign={'center'}>
              Play
            </Text>
          </Row>
        </TouchableOpacity>

        <Box ml={2} mr={4} mt={4}>
          <Text color="#fff" fontSize={20}>
            {'Overview'}
          </Text>
          <Text mt={1} textAlign={'justify'} color={'#95a0a9'} fontSize={12}>
            {movieDetails?.Plot}
          </Text>
          <Box mt={2}>
            <Text color={'#95a0a9'} fontSize={12}>
              Director - {movieDetails?.Director}
            </Text>
            <Text color={'#95a0a9'} fontSize={12}>
              Stars - {movieDetails?.Actors}
            </Text>
            <Text color={'#95a0a9'} fontSize={12}>
              Country - {movieDetails?.Country}
            </Text>
          </Box>
        </Box>
      </Pressable>
    </Box>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#ff0335',
    width: '95%',
    height: 40,

    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    borderRadius: 5,
  },
});
