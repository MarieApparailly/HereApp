import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import UserItem from "./UserItem";

const UserList = ({ users, navigation }) => {
  if (users.length > 0)
    return (
      <View style={styles.container}>
        <FlatList
          data={users}
          keyExtractor={(user) => user.id}
          renderItem={({ item }) => (
            <UserItem user={item} navigation={navigation} />
          )}
        />
      </View>
    );
  else
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Nothing yet !</Text>
      </View>
    );
};

export default UserList;

const styles = StyleSheet.create({
  journeyList: {
    flex: 1,
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});
