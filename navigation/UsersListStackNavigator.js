import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UsersListScreen from '../screens/UsersListScreen';
//import { screenOptions } from "../theme/styles";

const UsersListStack = createNativeStackNavigator();

const UsersListStackNavigator = () => {
  return (
    <UsersListStack.Navigator
      initialRouteName="UsersList" /*screenOptions={screenOptions}*/
    >
      <UsersListStack.Screen
        name="UsersList"
        component={UsersListScreen}
        options={{title: 'My team status'}}
      />
    </UsersListStack.Navigator>
  );
};

export default UsersListStackNavigator;
