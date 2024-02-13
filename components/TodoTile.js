import { View, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const TodoTile = ({ id, description }) => {
  const [tilePressed, setTilePressed] = useState(false);
  const [todoContent, setTodoContent] = useState(description);

  const handleTilePress = () => {
    setTilePressed((prev) => !prev);
  };

  const handleTextChange = (enteredValue) => {
    setTodoContent(enteredValue);
  };

  const handleSaveChanges = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {!tilePressed && (
          <Ionicons
            name="ellipse-outline"
            size={28}
            color="orange"
            onPress={handleTilePress}
          />
        )}
        {tilePressed && (
          <Ionicons
            name="checkmark-circle-outline"
            size={28}
            color="orange"
            onPress={handleTilePress}
          />
        )}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardAppearance="dark"
          value={todoContent}
          onChangeText={handleTextChange}
          onEndEditing={handleSaveChanges}
        />
      </View>
    </View>
  );
};

export default TodoTile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#414141",
    borderBottomWidth: 1,
    borderBottomEndRadius: 35,
    borderBottomStartRadius: 45,
  },
  buttonContainer: {},
  inputContainer: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "white",
  },
});
