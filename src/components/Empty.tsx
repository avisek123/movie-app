import {Center, Image, Text} from 'native-base';
import {StyleSheet} from 'react-native';

const Empty = () => {
  return (
    <Center mt="1/2" w="full" h="full">
      <Text fontSize={16} color={'#fff'} fontWeight={'semibold'}>
        No Data Found
      </Text>
    </Center>
  );
};

export default Empty;

const styles = StyleSheet.create({});
