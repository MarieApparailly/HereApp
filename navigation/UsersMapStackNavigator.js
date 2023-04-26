import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UsersMapScreen from '../screens/UsersMapScreen';
//import { screenOptions } from "../theme/styles";

const UsersMapStack = createNativeStackNavigator();

const UsersMapStackNavigator = () => {
  return (
    <UsersMapStack.Navigator
      initialRouteName="UsersMap" /*screenOptions={screenOptions}*/
    >
      <UsersMapStack.Screen
        name="UsersMap"
        component={UsersMapScreen}
        options={{title: 'My team position'}}
      />
    </UsersMapStack.Navigator>
  );
};

export default UsersMapStackNavigator;
