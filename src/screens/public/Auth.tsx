import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Box, Row, Text} from 'native-base';
import {DimensionHeight} from 'utils';
import LinearGradient from 'react-native-linear-gradient';
import {StatusBar} from 'react-native';
import {AuthModal} from 'components';
import {COLORS} from 'styles';

const Login = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <Box backgroundColor={'#000'} safeArea flex={1}>
      <StatusBar translucent backgroundColor="transparent" />
      <Box>
        <Image
          resizeMode="cover"
          style={{
            width: '100%',
            height: DimensionHeight / 1.6,
          }}
          source={{
            uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/dbse65i-93e9ce8a-2c76-43f3-ad5a-dffc39877ea5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUyOThiYWMwLWI4YmYtNGM4MC1hZjY3LTcyNWMxMjcyZGJiMFwvZGJzZTY1aS05M2U5Y2U4YS0yYzc2LTQzZjMtYWQ1YS1kZmZjMzk4NzdlYTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ecWdcOwuv6opCTZkZRlHfH3O3rzGCWgyDn_iU8EGjQM',
          }}
        />
        <LinearGradient
          start={{x: 0.5, y: 0.6}} // Start from the top center (y: 0)
          end={{x: 0.5, y: 0.1}} // End at the bottom center (y: 1)
          colors={['rgba(0,0,0,0.20)', 'rgba(0,0,0,0.60)']}
          style={{
            height: '100%',
            position: 'absolute',
            width: '100%',
          }}
        />
        <Box
          mt={10}
          ml={5}
          mr={5}
          backgroundColor={'#19191B'}
          height={'30%'}
          width={'90%'}
          alignItems={'center'}
          borderRadius={15}>
          <Text mt={4} fontSize={26} fontWeight={'bold'} color="#fff">
            Unlimited <Text color="#ff0335">entertainment</Text>
          </Text>
          <Text fontSize={26} fontWeight={'bold'} color="#fff">
            {' '}
            at your fingertips
          </Text>
          <Text mt={2} fontSize={12} color={COLORS.secondary}>
            Unlash a world of limitless entaintainment,
          </Text>
          <Text fontSize={12} color={COLORS.secondary}>
            watch everything and everywhere
          </Text>
          <TouchableOpacity
            onPress={() => setModalOpen(true)}
            style={styles.btn}>
            <Text fontSize={20} color="#fff">
              GET STARTED
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
      <AuthModal onClose={() => setModalOpen(false)} visible={modalOpen} />
    </Box>
  );
};

export default Login;

const styles = StyleSheet.create({
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
