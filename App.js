import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screen/HomeScreen";
import Bai1 from "./screen/Bai1";
import Bai2 from "./screen/Bai2";
import Bai3 from "./screen/bai3"; // Đổi tên file để đảm bảo nhất quán

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Trang chủ" }} />
        <Stack.Screen name="Bai1" component={Bai1} options={{ title: "Bài 1" }} />
        <Stack.Screen name="Bai2" component={Bai2} options={{ title: "Bài 2" }} />
        <Stack.Screen name="Bai3" component={Bai3} options={{ title: "Bài 3" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;