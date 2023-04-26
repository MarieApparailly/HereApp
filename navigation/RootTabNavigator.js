import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UsersMapStackNavigator from './UsersMapStackNavigator';
import UsersListStackNavigator from './UsersListStackNavigator';
// import {setStatusBarBackgroundColor} from 'expo-status-bar';

const Tab = createBottomTabNavigator();

const RootTabNavigator = () => {
  return (
    <NavigationContainer>
      {/* <StatusBar barStyle="light-content" backgroundColor="#f4511e" /> */}
      <Tab.Navigator
        screenOptions={({route}) => ({
          // Icons will be different if the tab is focused
          tabBarIcon: ({focused, color, size}) => {
            const icons = {
              UsersListStack: 'ios-list-outline',
              UsersMapStack: 'ios-map',
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
          headerShown: false,
        })}>
        <Tab.Screen
          name="UsersListStack"
          component={UsersListStackNavigator}
          options={{title: 'Status'}}
        />
        <Tab.Screen
          name="UsersMapStack"
          component={UsersMapStackNavigator}
          options={{title: 'Position'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootTabNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontSize: 25,
    color: 'red',
    marginVertical: 16,
    textAlign: 'center',
  },
});
