import { StyleSheet, Text, View } from "react-native";

const ListContent = () => {
  return (
    <View style={styles.container}>
      <Text>List Content Screen</Text>
    </View>
  );
};

export default ListContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
