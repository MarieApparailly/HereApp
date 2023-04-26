import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

const UserItem = ({ user, navigation }) => {
  return (
    <View style={styles.container}>
      {/* {console.log("yop")} */}
      {/* {users[userId].pseudo} */}
      <Text>{user.firstName + " " + user.lastName}</Text>
      <Text>{"tel : " + user.phone}</Text>
      <Text>{""}</Text>
    </View>
    /* <TouchableOpacity
        style={styles.container}
        onPress={() => {
          navigation.navigate("Journey", {
            journeyId: journey.id,
          });
        }}
      /> */
  );
};

export default UserItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
  },
  image: { height: 75, width: 75 },
});
