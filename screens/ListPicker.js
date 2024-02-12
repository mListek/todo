import { FlatList } from "react-native";

import { LISTS } from "../data/dummy-data";
import ListTile from "../components/ListTile";

const ListPicker = ({ navigation }) => {
  const renderListItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("ListContent", {
        item: itemData.item,
      });
    };

    return (
      <ListTile
        onPress={pressHandler}
        name={itemData.item.name}
        quantity={itemData.item.todos.length}
      />
    );
  };

  return (
    <FlatList
      data={LISTS}
      keyExtractor={(item) => item.id}
      renderItem={renderListItem}
    />
  );
};

export default ListPicker;
