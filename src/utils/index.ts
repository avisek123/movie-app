import {Dimensions} from 'react-native';

export const DimensionWidth = Dimensions.get('window').width;
export const DimensionHeight = Dimensions.get('window').height;
export function isValidEmail(email: string) {
  // Regular expression for a basic email format
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}
