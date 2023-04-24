import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import RootTabNavigator from './navigation/RootTabNavigator';
import ConnexionScreen from './screens/ConnexionScreen';
import UsersMapScreen from './screens/UsersMapScreen';
import UserList from './components/UserList';
import UserScreen from './screens/UserScreen';

export default App = () => {
  const [loggedUser, setLoggedUser] = useState();

  // Create either authentication form or module list component,
  // depending on the presence of a logged user
  const connexion = !loggedUser ? (
    <ConnexionScreen onLoginSuccessful={user => setLoggedUser(user)} />
  ) : null;
  const userOk = loggedUser ? <UserScreen /> : null;
  return (
    <View style={styles.container}>
      {connexion}
      {userOk}
    </View>
  );
  // return <RootTabNavigator />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
