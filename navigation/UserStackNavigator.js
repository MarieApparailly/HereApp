import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UsersListScreen from '../screens/UsersListScreen';
import UsersMapScreen from '../screens/UsersMapScreen';
//import { screenOptions } from "../theme/styles";

const UserStack = createNativeStackNavigator();

const UserStackNavigator = () => {
  return (
    <UserStack.Navigator
      initialRouteName="UsersMap" /*screenOptions={screenOptions}*/
      screenOptions={({route}) => ({
        // Icons will be different if the tab is focused
        tabBarIcon: ({focused, color, size}) => {
          const icons = {
            UserStack: 'ios-list-outline',
            UserMapStack: 'ios-people-outline',
          };
          return (
            <Ionicons
              name={icons[route.name] || 'ios-menu'}
              size={25}
              color={color}
            />
          );
        },
        // Hiding tab navigator header to show only stack header
        headerShown: true,
      })}>
      <UserStack.Screen
        name="UsersMap"
        component={UsersMapScreen}
        options={{title: 'HERE'}}
      />
      <UserStack.Screen
        name="Users"
        component={UsersListScreen}
        options={{title: 'Mon équipe : list'}}
      />
    </UserStack.Navigator>
  );
};

export default UserStackNavigator;
