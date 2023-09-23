import {StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';
import {Box, Row, Text, VStack} from 'native-base';
import {Image} from 'react-native';
import {MovieType} from 'types';
import {Rating} from 'react-native-ratings';

const MovieCard = ({item}: {item: MovieType}) => {
  const {width, height} = useWindowDimensions();
  const genreArray = item?.Genre?.split(', ');

  return (
    <>
      <Box
        h={'48'}
        w={width - 28}
        mt={15}
        backgroundColor={'#19191B'}
        borderRadius={10}>
        <Row space={4}>
          <Image
            style={{
              width: 150,
              height: height / 4.3,
              resizeMode: 'contain',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
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
                  borderColor={'#95a0a9'}>
                  <Text color={'#95a0a9'} fontSize={10}>
                    {ele}
                  </Text>
                </Box>
              ))}
            </Row>
            <Row mt={3}>
              <Text fontSize={12} color={'#95a0a9'}>
                {item?.Language}
              </Text>
              <Box
                alignSelf={'center'}
                borderRadius={20}
                backgroundColor={'#95a0a9'}
                height={1}
                width={1}
                ml={1}
              />

              <Text ml={1} fontSize={12} color={'#95a0a9'}>
                {item?.Year}
              </Text>
            </Row>
            <Text mt={1.5} fontSize={12} color={'#95a0a9'}>
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
                tintColor={'#19191B'}
                ratingBackgroundColor={'lightgrey'}
                imageSize={15}
                fractions="{1}"
              />
              <Text ml={2} fontSize={12} color={'orange.300'}>
                {item?.imdbRating}
              </Text>
            </Row>
            <Text fontSize={12} width={200} color={'#95a0a9'} numberOfLines={2}>
              {item?.Plot}
            </Text>
          </VStack>
        </Row>
      </Box>
    </>
  );
};

export default MovieCard;

const styles = StyleSheet.create({});