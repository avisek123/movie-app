import {StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';
import {Box, Pressable, Row, Text, VStack} from 'native-base';
import {Image} from 'react-native';
import {MovieType} from 'types';
import {Rating} from 'react-native-ratings';
import {useNavigation} from '@react-navigation/native';
import {PrivateNavigationProps} from 'types';
import {COLORS} from 'styles';

const MovieCard = ({item}: {item: MovieType}) => {
  const {width, height} = useWindowDimensions();
  const {navigate} = useNavigation<PrivateNavigationProps>();
  const genreArray = item?.Genre?.split(', ');

  return (
    <>
      <Pressable
        onPress={() =>
          navigate('MovieDetails', {
            imdbID: item?.imdbID,
          })
        }
        h={'48'}
        w={width - 28}
        mt={15}
        backgroundColor={COLORS.black_fade}
        borderRadius={10}>
        <Row space={4}>
          <Image
            style={{...styles.img, height: height / 4.3}}
            source={{
              uri: item?.Poster,
            }}
          />
          <VStack mt={3}>
            <Text
              fontSize={20}
              numberOfLines={2}
              fontWeight={'bold'}
              color={'#fff'}>
              {item?.Title}
            </Text>
            <Row space={3} mt={2}>
              {genreArray?.map((ele, ind) => (
                <Box
                  key={ind}
                  p={1}
                  borderRadius={20}
                  borderWidth={1}
                  justifyContent={'center'}
                  alignItems={'center'}
                  borderColor={COLORS.secondary}>
                  <Text color={COLORS.secondary} fontSize={10}>
                    {ele}
                  </Text>
                </Box>
              ))}
            </Row>
            <Row mt={3}>
              <Text fontSize={12} color={COLORS.secondary}>
                {item?.Language}
              </Text>
              <Box
                alignSelf={'center'}
                borderRadius={20}
                backgroundColor={COLORS.secondary}
                height={1}
                width={1}
                ml={1}
              />

              <Text ml={1} fontSize={12} color={COLORS.secondary}>
                {item?.Year}
              </Text>
            </Row>
            <Text mt={1.5} fontSize={12} color={COLORS.secondary}>
              {Math.floor(parseFloat(item?.Runtime) / 60)} hr {''}
              {''}
              {parseFloat(item?.Runtime) % 60} min
            </Text>
            <Row mt={2}>
              <Rating
                type="custom"
                ratingCount={5}
                startingValue={item?.imdbRating / 2}
                readonly
                ratingColor={'orange'}
                tintColor={COLORS.black_fade}
                ratingBackgroundColor={'lightgrey'}
                imageSize={15}
                fractions="{1}"
              />
              <Text ml={2} fontSize={12} color={'orange.300'}>
                {item?.imdbRating}
              </Text>
            </Row>
            <Text
              fontSize={12}
              width={200}
              color={COLORS.secondary}
              numberOfLines={2}>
              {item?.Plot}
            </Text>
          </VStack>
        </Row>
      </Pressable>
    </>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  img: {
    width: 150,
    resizeMode: 'contain',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
