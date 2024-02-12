import { Pressable, StyleSheet, Text, View } from "react-native";

const ListTile = ({ name, quantity }) => {
  const itemText = quantity === 1 ? "item" : "items";

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.quantity}>
            {quantity} {itemText}
          </Text>
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
    backgroundColor: "#323030",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  quantity: {
    fontSize: 16,
    color: "white",
    textDecorationLine: "underline",
  },
});
