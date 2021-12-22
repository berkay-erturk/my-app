import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";


const MyStack = props => {
  const Stack = createStackNavigator();

const options ={
    headerShown: false // bunu istersen true yaparın yada kendi headerini kendin yaparsın ona sen kara ver ama bunun customu zor güzzelde değil
}


  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={options} />
          <Stack.Screen name="Detail" component={DetailsScreen} options={options} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};
export default MyStack;