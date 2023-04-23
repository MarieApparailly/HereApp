import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
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
          // tabBarStyle: {backgroundColor: '#f4511e'},
          //   tabBarIcon: ({focused, color, size}) => {
          //     const icons = {
          //       UsersListStack: 'ios-list-outline',
          //       UsersMapStack: 'ios-map',
          //     };
          //     return (
          //       <Ionicons
          //         name={icons[route.name] || 'ios-menu'}
          //         size={25}
          //         color={color}
          //       />
          //     );
          //   },
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

// const mapStyle = [
//   {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
//   {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
//   {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
//   {
//     featureType: 'administrative.locality',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'poi',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'poi.park',
//     elementType: 'geometry',
//     stylers: [{color: '#263c3f'}],
//   },
//   {
//     featureType: 'poi.park',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#6b9a76'}],
//   },
//   {
//     featureType: 'road',
//     elementType: 'geometry',
//     stylers: [{color: '#38414e'}],
//   },
//   {
//     featureType: 'road',
//     elementType: 'geometry.stroke',
//     stylers: [{color: '#212a37'}],
//   },
//   {
//     featureType: 'road',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#9ca5b3'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'geometry',
//     stylers: [{color: '#746855'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'geometry.stroke',
//     stylers: [{color: '#1f2835'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#f3d19c'}],
//   },
//   {
//     featureType: 'transit',
//     elementType: 'geometry',
//     stylers: [{color: '#2f3948'}],
//   },
//   {
//     featureType: 'transit.station',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'geometry',
//     stylers: [{color: '#17263c'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#515c6d'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'labels.text.stroke',
//     stylers: [{color: '#17263c'}],
//   },
// ];

// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//   },
//   mapStyle: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
//   switchList: {
//     flexDirection: 'row-reverse',
//     position: 'absolute',
//     top: 100,
//     left: 30,
//   },
// });

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
