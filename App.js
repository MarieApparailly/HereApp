import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import RootTabNavigator from './navigation/RootTabNavigator';
import ConnexionScreen from './screens/ConnexionScreen';

export default App = () => {
  const [loggedUser, setLoggedUser] = useState();
  const connexion = !loggedUser ? (
    <ConnexionScreen onLoginSuccessful={user => setLoggedUser(user)} />
  ) : null;
  const userOk = loggedUser ? <RootTabNavigator /> : null;

  return (
    <View style={styles.container}>
      {connexion}
      {userOk}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
