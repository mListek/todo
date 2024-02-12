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
            contentStyle: { backgroundColor: "black" },
          }}
        >
          <Stack.Screen name="List Picker" component={ListPicker} />
          <Stack.Screen name="List Content" component={ListContent} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
