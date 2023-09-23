import {StyleSheet} from 'react-native';
import React from 'react';
import {MovieGenre} from 'types';
import {Box, Image, Row, Text} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
const GenreCard = ({item, index}: {item: MovieGenre; index: number}) => {
  return (
    <>
      <Box mt={index === 0 ? 10 : 5} ml={5} mr={5}>
        <Row space={5}>
          <Image
            alt=""
            style={styles.img}
            source={{
              uri: item?.img,
            }}
          />
          <Text
            alignSelf={'center'}
            fontWeight={'bold'}
            fontSize={14}
            flex={1}
            color={'#fff'}>
            {item?.title}
          </Text>
          <Ionicons
            style={{
              alignSelf: 'center',
            }}
            name="chevron-forward-outline"
            color={'#fff'}
            size={21}
          />
        </Row>
      </Box>
    </>
  );
};

export default GenreCard;

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});
