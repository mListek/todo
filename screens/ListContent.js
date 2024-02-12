import { FlatList } from "react-native";
import TodoTile from "../components/TodoTile";

const renderTodoItem = (itemData) => {
  return (
    <TodoTile id={itemData.item.id} description={itemData.item.description} />
  );
};

const ListContent = ({ route }) => {
  const item = route.params.item;

  return (
    <FlatList
      data={item.todos}
      keyExtractor={(item) => item.id}
      renderItem={renderTodoItem}
    />
  );
};

export default ListContent;
