import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import userService from '../api/userService';
import UserList from '../components/UserList';
import authenticateUser from '../api/authentication';

const UserScreen = ([{navigation}, {login}, {password}]) => {
  console.log(login);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const [usersApi, setUsersApi] = useState([
  //   {},
  //   {},
  //   {},
  //   {},
  //   {},
  //   {},
  //   {},
  //   {},
  //   {},
  //   {},
  // ]);
  // // const [users, setUsers] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);

  // const loadUsers = async () => {
  //   setLoading(true);
  //   setError(false);

  //   try {
  //     const usersLoaded = await userService.getUsers();
  //     setUsersApi(usersLoaded);
  //     console.log('connexion');
  //     console.log(usersLoaded);
  //     console.log('fin connexion');
  //   } catch (e) {
  //     setError(true);
  //   }
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   loadUsers();
  // }, []);

  // if (loading) {
  //   return (
  //     <View>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // }

  // if (error) {
  //   return (
  //     <View>
  //       <Text>Something went wrong :\</Text>
  //     </View>
  //   );
  // }
  return (
    <View style={styles.container}>
      {/* console.log(userLogged); */}
      <Text>User : </Text>
      {/* <Text>Utilisateurs :</Text>
      <UserList style={{flex: 1}} users={usersApi} navigation={navigation} />
      <TouchableOpacity
        onPress={() => {
          loadjourney();
        }}
      /> */}
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
