import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  Text,
  View,
  Button,
} from 'react-native';
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';
import MapView, {Marker} from 'react-native-maps';
import UsersListScreen from './UsersListScreen';

const UsersMapScreen = ({navigation}) => {
  const list = () => {
    return <UsersListScreen />;
  };

  const LOCATION_TASK_NAME = 'LOCATION_TASK_NAME';
  let foregroundSubscription = null;

  // Define the background task for location tracking
  TaskManager.defineTask(LOCATION_TASK_NAME, async ({data, error}) => {
    if (error) {
      console.error(error);
      return;
    }
    if (data) {
      // Extract location coordinates from data
      const {locations} = data;
      const location = locations[0];
      if (location) {
        console.log('Location in background', location.coords);
      }
    }
  });

  // Define position state: {latitude: number, longitude: number}
  const [position, setPosition] = useState(null);

  // Request permissions right after starting the app
  useEffect(() => {
    const requestPermissions = async () => {
      const foreground = await Location.requestForegroundPermissionsAsync();
      if (foreground.granted)
        await Location.requestBackgroundPermissionsAsync();
    };
    requestPermissions();
    startForegroundUpdate();
    //startBackgroundUpdate();
  }, []);

  // Start location tracking in foreground
  const startForegroundUpdate = async () => {
    // Check if foreground permission is granted
    const {granted} = await Location.getForegroundPermissionsAsync();
    if (!granted) {
      console.log('location tracking denied');
      return;
    }

    // Make sure that foreground location tracking is not running
    foregroundSubscription?.remove();

    // Start watching position in real-time
    foregroundSubscription = await Location.watchPositionAsync(
      {
        // For better logs, we set the accuracy to the most sensitive option
        accuracy: Location.Accuracy.BestForNavigation,
      },
      location => {
        setPosition(location.coords);
      },
    );
  };

  // Stop location tracking in foreground
  const stopForegroundUpdate = () => {
    foregroundSubscription?.remove();
    setPosition(null);
  };

  // Start location tracking in background
  const startBackgroundUpdate = async () => {
    // Don't track position if permission is not granted
    const {granted} = await Location.getBackgroundPermissionsAsync();
    if (!granted) {
      console.log('location tracking denied');
      return;
    }

    // Make sure the task is defined otherwise do not start tracking
    const isTaskDefined = await TaskManager.isTaskDefined(LOCATION_TASK_NAME);
    if (!isTaskDefined) {
      console.log('Task is not defined');
      return;
    }

    // Don't track if it is already running in background
    const hasStarted = await Location.hasStartedLocationUpdatesAsync(
      LOCATION_TASK_NAME,
    );
    if (hasStarted) {
      console.log('Already started');
      return;
    }

    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      // For better logs, we set the accuracy to the most sensitive option
      accuracy: Location.Accuracy.BestForNavigation,
      // Make sure to enable this notification if you want to consistently track in the background
      showsBackgroundLocationIndicator: true,
      foregroundService: {
        notificationTitle: 'Location',
        notificationBody: 'Location tracking in background',
        notificationColor: '#fff',
      },
    });
  };

  // Stop location tracking in background
  const stopBackgroundUpdate = async () => {
    const hasStarted = await Location.hasStartedLocationUpdatesAsync(
      LOCATION_TASK_NAME,
    );
    if (hasStarted) {
      await Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME);
      console.log('Location tacking stopped');
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[{flex: 3}, styles.container]}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 44.83476,
            longitude: -0.573644,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyle}>
          <Marker
            draggable
            coordinate={{
              latitude: position?.latitude,
              longitude: position?.longitude,
            }}
            onDragEnd={e => alert(JSON.parse(e.nativeEvent.coordinate))}
            title={
              'Tu es à : ' + position?.latitude + ' , ' + position?.longitude
            }
          />
          <Marker
            pinColor={'#242333'}
            draggable
            coordinate={{
              latitude: 44.82476,
              longitude: -0.583644,
            }}
            onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Tiphaine Petit'}
            description={'0745887110'}
          />
          <Marker
            pinColor={'#347139'}
            draggable
            coordinate={{
              latitude: 44.82876,
              longitude: -0.585644,
            }}
            onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Mathys Traversier'}
            description={'0784556120'}
          />
          <Marker
            pinColor={'#746855'}
            draggable
            coordinate={{
              latitude: 44.80476,
              longitude: -0.583644,
            }}
            onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Clémence Monnier'}
            description={'0678900043'}
          />
        </MapView>
      </View>
    </SafeAreaView>
  );
};

export default UsersMapScreen;

const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginTop: 15,
  },
  separator: {
    marginVertical: 8,
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  switchList: {
    flexDirection: 'row-reverse',
    position: 'absolute',
    top: 100,
    left: 30,
  },
});
