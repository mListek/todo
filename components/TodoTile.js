import { Text, View, StyleSheet, Pressable } from "react-native";

const TodoTile = ({ id, description }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.description}>{description}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default TodoTile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    height: 55,
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
  description: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
});
