import { FlatList, StyleSheet } from "react-native";

import { LISTS } from "../data/dummy-data";
import ListTile from "../components/ListTile";

const renderListItem = (itemData) => {
  return <ListTile name={itemData.item.name} />;
};

const ListPicker = () => {
  return (
    <FlatList
      data={LISTS}
      keyExtractor={(item) => item.id}
      renderItem={renderListItem}
      style={styles.container}
    />
  );
};

export default ListPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
