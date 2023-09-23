import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type PublicStackParams = {
  Register: undefined;
  Login: undefined;
};
export type PrivateStackParams = {
  BottomTabs: undefined;
  Home: undefined;
};
export type BottomTabsTypes = {
  Home: undefined;
  Jobs: undefined;
  Account: undefined;
  Geners: undefined;
  Notification: undefined;
  Discover: undefined;
};

export type PublicNavigationProps =
  NativeStackNavigationProp<PublicStackParams>;
export type PrivateNavigationProps =
  NativeStackNavigationProp<PrivateStackParams>;

export type RootRouteProps<RouteName extends keyof PublicStackParams> =
  RouteProp<PublicStackParams, RouteName>;

export type PrivateRootRouteProps<RouteName extends keyof PrivateStackParams> =
  RouteProp<PrivateStackParams, RouteName>;
