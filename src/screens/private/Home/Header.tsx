import React from 'react';
import {Avatar, Box, Row, Text} from 'native-base';
import {useAppContext} from 'contexts';

const Header = () => {
  const {user} = useAppContext();
  return (
    <>
      <Row justifyContent={'space-between'}>
        <Box>
          <Text fontSize={12} color={'#fff'}>
            Welcome {user?.name || user?.email}
          </Text>
          <Text fontWeight={'bold'} fontSize={15} color={'#fff'}>
            Let's relax and watch movie
          </Text>
        </Box>
        <Avatar
          size={'sm'}
          bg="green.500"
          source={{
            uri: 'https://img.freepik.com/premium-vector/young-man-avatar-character_24877-9475.jpg?size=626&ext=jpg&ga=GA1.1.1386614323.1695415808&semt=ais',
          }}>
          AJ
        </Avatar>
      </Row>
    </>
  );
};

export default Header;
