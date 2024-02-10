import { Pressable, StyleSheet, Text, View } from "react-native";

const ListTile = ({ name }) => {
  return (
    <View style={styles.container}>
      <Pressable>
        <View>
          <Text>{name}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ListTile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 10,
    backgroundColor: "lightgrey",
  },
});
