import { FlatList } from "react-native";

import { LISTS } from "../data/dummy-data";
import ListTile from "../components/ListTile";

const renderListItem = (itemData) => {
  return (
    <ListTile name={itemData.item.name} quantity={itemData.item.todos.length} />
  );
};

const ListPicker = () => {
  return (
    <FlatList
      data={LISTS}
      keyExtractor={(item) => item.id}
      renderItem={renderListItem}
    />
  );
};

export default ListPicker;
