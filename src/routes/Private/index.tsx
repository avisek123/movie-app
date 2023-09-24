import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PrivateStackParams} from 'types';
import {Private} from 'screens';
import {BottomTabs} from '../layouts';

const Stack = createNativeStackNavigator<PrivateStackParams>();
const PrivateRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="MovieDetails"
        component={Private.MovieDetails}
      />
    </Stack.Navigator>
  );
};
export default PrivateRoutes;
