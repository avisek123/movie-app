import {useAppContext} from 'contexts';
import {Center, Input, Text, VStack} from 'native-base';
import React from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import {Image, Modal, Pressable, SafeAreaView, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from 'styles';
import {isValidEmail} from 'utils';

type Props = {
  visible: boolean;

  onClose: () => void;
};

export default ({onClose, visible}: Props) => {
  const [isCreateAccount, setIsCreateAccount] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const {setUser, setIsLoggedIn} = useAppContext();

  const handleSubmit = () => {
    if (!name && isCreateAccount)
      return Alert.alert('Error', 'Please enter your name');
    if (!email) return Alert.alert('Error', 'Please enter your email');
    if (!isValidEmail(email))
      return Alert.alert('Error', 'Please enter a valid email');
    setUser({
      name,
      email,
    });
    setIsLoggedIn(true);
  };
  return (
    <>
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => onClose()}>
        <SafeAreaView style={styles.container}>
          <VStack w="100%" space={5} alignSelf="center">
            <Pressable
              style={{
                alignSelf: 'flex-end',
                marginTop: 10,
                marginRight: 10,
              }}
              onPress={() => onClose()}>
              <MaterialIcons name="close" size={25} color="#000" />
            </Pressable>
            <Center>
              <Text fontWeight={'medium'} color={'#000'} fontSize={24}>
                Ready to watch ?
              </Text>
              <Text>{`Enter your ${
                isCreateAccount ? 'name , email' : 'email'
              } to ${
                isCreateAccount ? 'create' : 'sign in to'
              } your account`}</Text>
              {isCreateAccount && (
                <Input
                  value={name}
                  onChangeText={txt => setName(txt)}
                  placeholder="Enter your name"
                  width="90%"
                  borderRadius="4"
                  backgroundColor={'#fff'}
                  py="3"
                  px="5"
                  fontSize="14"
                  mt={10}
                />
              )}
              <Input
                value={email}
                onChangeText={txt => setEmail(txt)}
                placeholder="Enter your email"
                width="90%"
                borderRadius="4"
                backgroundColor={'#fff'}
                py="3"
                px="5"
                fontSize="14"
                mt={10}
              />
              <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
                <Text fontSize={16} color="#fff">
                  {isCreateAccount ? 'CREATE ACCOUNT' : '  SIGN IN'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setIsCreateAccount(!isCreateAccount);
                }}
                style={{
                  marginTop: 15,
                }}>
                <Text fontSize={16} color={COLORS.primary}>
                  {!isCreateAccount ? 'Create Account' : 'Sign In'}
                </Text>
              </TouchableOpacity>
            </Center>
          </VStack>
        </SafeAreaView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  btn: {
    backgroundColor: '#ff0335',
    width: '90%',
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
    borderRadius: 5,
  },
});
