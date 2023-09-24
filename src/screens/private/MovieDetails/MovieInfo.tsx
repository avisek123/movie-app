import {StyleSheet} from 'react-native';
import React from 'react';
import {Box, Image, Row, Text, VStack} from 'native-base';
import {Rating} from 'react-native-ratings';
import {COLORS} from 'styles';

const MovieInfo = ({movieDetails}: any) => {
  const genreArray = movieDetails?.Genre?.split(', ');
  return (
    <>
      <Box mt={10}>
        <Row space={7}>
          <Image
            resizeMode="contain"
            borderRadius={10}
            alt=""
            w={'40%'}
            h={'48'}
            source={{
              uri: movieDetails?.Poster,
            }}
          />
          <VStack>
            <Text color="#fff" fontSize={20}>
              {movieDetails?.Title}
            </Text>
            <Row space={3} mt={2}>
              {genreArray?.map((ele: string, ind: string) => (
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
                {movieDetails?.Language}
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
                {movieDetails?.Year}
              </Text>
            </Row>
            <Row mt={1.5}>
              <Text fontSize={12} color={COLORS.secondary}>
                {Math.floor(parseFloat(movieDetails?.Runtime) / 60)} hr {''}
                {''}
                {parseFloat(movieDetails?.Runtime) % 60} min
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
                {movieDetails?.Type}
              </Text>
            </Row>
            <Row mt={2}>
              <Rating
                type="custom"
                ratingCount={5}
                startingValue={movieDetails?.imdbRating / 2}
                readonly
                ratingColor={'orange'}
                tintColor={COLORS.black_fade}
                ratingBackgroundColor={'lightgrey'}
                imageSize={15}
                fractions="{1}"
              />
              <Text ml={2} fontSize={12} color={'orange.300'}>
                {movieDetails?.imdbRating}
              </Text>
            </Row>
          </VStack>
        </Row>
      </Box>
    </>
  );
};

export default MovieInfo;

const styles = StyleSheet.create({});
