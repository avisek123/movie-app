import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {BottomTabsTypes} from 'src/types/allRoutes';
import {Private} from 'screens';
import {COLORS} from 'styles';

const Tab = createBottomTabNavigator<BottomTabsTypes>();

export default function BottomTabs() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: COLORS.primary,
          tabBarStyle: {backgroundColor: '#000', borderTopWidth: 0},
        }}>
        <Tab.Screen
          name={'Home'}
          component={Private.Home}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Ionicons name="home" color={color} size={21} />
            ),
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name={'Discover'}
          component={Private.Discover}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="logo-xbox" color={color} size={21} />
            ),
            tabBarLabel: 'Discover',
          }}
        />
        <Tab.Screen
          name={'Notification'}
          component={Private.Notification}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="notifications" color={color} size={21} />
            ),
            tabBarLabel: 'Notification',
          }}
        />
        <Tab.Screen
          name={'Account'}
          component={Private.Account}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="person" color={color} size={21} />
            ),
            tabBarLabel: 'Account',
          }}
        />
      </Tab.Navigator>
    </>
  );
}
