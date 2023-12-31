import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type PublicStackParams = {
  Register: undefined;
  Login: undefined;
};
export type PrivateStackParams = {
  BottomTabs: undefined;
  Home: undefined;
  Genre: {
    type: string;
  };
  MovieDetails: {
    imdbID: string;
  };
};
export type BottomTabsTypes = {
  Home: undefined;

  Account: undefined;

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
