import {StyleSheet} from 'react-native';
import React from 'react';
import {Box, Center, Text} from 'native-base';
import {COLORS} from 'styles';

const Notification = () => {
  return (
    <Box flex={1} bgColor={'#000'}>
      <Text ml={3} mt={5} fontWeight={'bold'} fontSize={19} color={'#fff'}>
        Notification
      </Text>
      <Center h="2/3">
        <Text color={COLORS.secondary}>No new notifications</Text>
      </Center>
    </Box>
  );
};

export default Notification;

const styles = StyleSheet.create({});
