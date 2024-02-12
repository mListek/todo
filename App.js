import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListPicker from "./screens/ListPicker";
import ListContent from "./screens/ListContent";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "black" },
            headerTintColor: "white",
            headerBackTitle: "Back",
            contentStyle: { backgroundColor: "black" },
          }}
        >
          <Stack.Screen
            name="ListPicker"
            component={ListPicker}
            options={{ title: "Your Lists" }}
          />
          <Stack.Screen
            name="ListContent"
            component={ListContent}
            options={({ route }) => {
              const item = route.params.item;
              return {
                title: item.name,
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
