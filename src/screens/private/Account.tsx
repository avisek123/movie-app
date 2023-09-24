import {Alert, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  Avatar,
  Box,
  Icon,
  Pressable,
  Row,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAppContext} from 'contexts';

const Account = () => {
  const {user, setIsLoggedIn} = useAppContext();
  const data = [
    {
      id: 1,
      title: 'My Profile',
      icon: 'person-outline',
      name: Ionicons,
      onPress: () => {},
    },
    {
      id: 2,
      title: 'History',
      icon: 'notifications-outline',
      name: Ionicons,
      onPress: () => {},
    },
    {
      id: 13,
      title: 'My Favorites',
      icon: 'heart-outline',
      name: Ionicons,
      onPress: () => {},
    },
    {
      id: 3,
      title: 'Download',
      icon: 'hourglass-outline',
      name: Ionicons,
      onPress: () => {},
    },

    {
      id: 7,
      title: 'Change Password',
      icon: 'lock',
      name: Feather,
      onPress: () => {},
    },
    {
      id: 8,
      title: 'Privacy & Policies',
      icon: 'information-circle-outline',
      name: Ionicons,
      onPress: () => {},
    },
    {
      id: 28,
      title: 'Terms & Conditions',
      icon: 'clipboard-outline',
      name: Ionicons,
      onPress: () => {},
    },

    {
      id: 9,
      title: 'About Us',
      icon: 'alert-circle-outline',
      name: Ionicons,
      onPress: () => {},
    },
    {
      id: 10,
      title: 'Delete Account',
      icon: 'delete',
      name: Feather,
    },
  ];

  return (
    <Box flex={1} safeArea bgColor="#000">
      <ScrollView>
        <Pressable p={3}>
          <Row space={4} mt={3}>
            <Avatar
              source={{
                uri: 'https://img.freepik.com/premium-vector/young-man-avatar-character_24877-9475.jpg?size=626&ext=jpg&ga=GA1.1.1386614323.1695415808&semt=ais',
              }}
            />
            <VStack flex={1} alignSelf={'center'}>
              <Text fontSize={13} color={'#fff'}>
                Welcome
              </Text>
              <Text fontSize={15} color={'#fff'} fontWeight={'bold'}>
                {user?.name || user?.email}
              </Text>
            </VStack>
            <Icon
              alignSelf={'center'}
              as={AntDesign}
              color="#fff"
              mr={3}
              name="login"
              size="md"
            />
          </Row>
        </Pressable>
        <Box
          alignSelf={'center'}
          w={'90%'}
          mt={3}
          backgroundColor="gray.400"
          h={0.6}></Box>

        <Box mt={5} p={4} pl={7} pr={7}>
          {data?.map((item, index) => (
            <Pressable
              onPress={() => {
                Alert.alert('Hello', 'This features is under the process.');
              }}
              mt={index === 0 ? -3 : 6}
              key={item?.id}>
              <Row>
                <Icon
                  alignSelf={'center'}
                  as={item?.name}
                  mr={3}
                  name={item?.icon}
                  size="md"
                />
                <Text flex={1} color={'#fff'} fontSize={13}>
                  {' '}
                  {item.title}
                </Text>
                <Icon
                  alignSelf={'center'}
                  as={Ionicons}
                  color={'#fff'}
                  mr={3}
                  name="chevron-forward"
                  size="lg"
                />
              </Row>
            </Pressable>
          ))}
        </Box>

        <TouchableOpacity
          onPress={() => setIsLoggedIn(false)}
          style={styles.btn}>
          <Row alignSelf={'center'} mt={1}>
            <Icon
              alignSelf={'center'}
              as={MIcon}
              mr={3}
              name="logout"
              color="#fff"
              size="lg"
            />
            <Text color={'#fff'} bold textAlign={'center'}>
              Logout
            </Text>
          </Row>
        </TouchableOpacity>
      </ScrollView>
    </Box>
  );
};

export default Account;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#ff0335',
    width: '40%',
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
    borderRadius: 5,
  },
});
